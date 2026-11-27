/**
 * Rate limiting for the contact form.
 *
 * If UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN are set (Upstash free
 * tier is enough), the limit is shared across every server. Otherwise it falls
 * back to an in-memory limit per server instance, which still stops a single
 * client from flooding the form.
 */

const WINDOW_SECONDS = 10 * 60; // 10 minutes
const MAX_REQUESTS = 5; // messages per IP per window

type Bucket = { count: number; resetAt: number };
const memory = new Map<string, Bucket>();

function memoryLimit(key: string): boolean {
  const now = Date.now();
  // Keep the map small.
  if (memory.size > 5000) {
    for (const [k, bucket] of memory) {
      if (bucket.resetAt <= now) memory.delete(k);
    }
  }
  const bucket = memory.get(key);
  if (!bucket || bucket.resetAt <= now) {
    memory.set(key, { count: 1, resetAt: now + WINDOW_SECONDS * 1000 });
    return true;
  }
  bucket.count += 1;
  return bucket.count <= MAX_REQUESTS;
}

async function upstashLimit(key: string, url: string, token: string): Promise<boolean | null> {
  try {
    const response = await fetch(`${url.replace(/\/$/, "")}/pipeline`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify([
        ["INCR", key],
        ["EXPIRE", key, String(WINDOW_SECONDS), "NX"],
      ]),
      cache: "no-store",
      signal: AbortSignal.timeout(2500),
    });
    if (!response.ok) return null;
    const data = (await response.json()) as Array<{ result?: unknown }>;
    const count = Number(data?.[0]?.result);
    if (!Number.isFinite(count)) return null;
    return count <= MAX_REQUESTS;
  } catch {
    return null;
  }
}

/** Returns true if this client may send another message now. */
export async function allowRequest(ip: string): Promise<boolean> {
  const key = `contact:${ip}`;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (url && token) {
    const shared = await upstashLimit(key, url, token);
    if (shared !== null) return shared;
  }
  return memoryLimit(key);
}

export function clientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return headers.get("x-real-ip") ?? "unknown";
}
