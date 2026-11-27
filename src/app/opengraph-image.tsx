import { ImageResponse } from "next/og";

export const alt = "LexConv: we build and run software and hardware businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#f2f5f7",
          color: "#0f2230",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 8,
              background: "#0f2230",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 28, height: 12, borderRadius: 2, background: "#dcebf2" }} />
          </div>
          <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>LexConv</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 900 }}>
            We build and run software and hardware businesses.
          </div>
          <div style={{ fontSize: 30, color: "#4a5b68" }}>
            Live product: ColdChain OS, monitoring for cold storages and warehouses.
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <div style={{ height: 4, background: "#9fb3c0" }} />
          <div style={{ height: 40, background: "#dcebf2" }} />
          <div style={{ height: 4, background: "#9fb3c0" }} />
        </div>
      </div>
    ),
    size,
  );
}
