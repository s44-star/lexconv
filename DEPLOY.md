# Deploying lexconv.com from your phone

Everything below works in your phone's browser (Chrome or Safari). You don't need a computer, a terminal or the GitHub app.

**How it works:** the code lives on GitHub in `s44-star/lexconv`. Vercel watches that repo.

- When anything changes on the **`site-v2`** branch, Vercel builds a private **preview** link. lexconv.com does not change.
- When changes reach the **`main`** branch, Vercel puts them live on **lexconv.com**.
- If a build fails, Vercel keeps the last working version live. A broken build can never take the site down.

---

## Step 1: Fill in your business address (2 minutes)

LexConv is a sole proprietorship registered in India, and the site says so. The site won't go live until your business address is filled in. Razorpay checks the name and address on the site against your KYC.

1. Open **github.com/s44-star/lexconv** and sign in.
2. Open the folders `src` → `content` → **`company.ts`**.
3. Tap the **pencil icon** (Edit this file). On a phone it may be under the **⋯** menu.
4. Find `address: null,` and replace it with your address **inside double quotes**, exactly as in your Razorpay KYC:

   ```ts
   address: "Your full business address, Bhawanipatna, Odisha 766001, India",
   ```

   Keep the comma at the end. If your registered trade name isn't exactly `LexConv`, change `tradeName` the same way.
5. Tap **Commit changes…** and then **Commit changes**.

If you later register a company (for example a Pvt Ltd or OPC), update `company.ts` and the legal pages at that time.

## Step 2: Turn on the contact form (5 minutes)

The form sends e-mail through Resend. Your lexconv.com domain is already verified in Resend (ColdChain OS uses it).

1. Open **resend.com** → **API Keys** → **Create API key**.
   - Name: `lexconv-website`
   - Permission: **Sending access**
   - Domain: **lexconv.com**
2. Copy the key (it starts with `re_`). Resend only shows it once.
3. Open **vercel.com** → project **lexconv** → **Settings** → **Environment Variables**.
4. Add:
   - Key: `RESEND_API_KEY`
   - Value: paste the key
   - Environments: tick **Production** and **Preview**
5. Tap **Save**.

Optional variables (the defaults are already right):

| Key | Default | What it does |
|---|---|---|
| `CONTACT_TO_EMAIL` | `ceo@lexconv.com` | Where form messages arrive |
| `CONTACT_FROM_EMAIL` | `LexConv website <website@lexconv.com>` | Sender name on those e-mails |
| `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` | not set | Stronger spam limits. Free at upstash.com → Redis → Create database → REST API |

**A new variable only applies to the next build.** After adding it, go to **Deployments**, open the newest one, tap **⋯** → **Redeploy**.

## Step 3: Check the preview

1. In Vercel, open **Deployments**. The top one with the branch `site-v2` is your preview.
2. Tap **Visit**. You need to be signed in to Vercel to see previews.
3. Check every page and your company details in the footer. Send yourself a test message from **Contact**. It should arrive at ceo@lexconv.com within a minute, and pressing *Reply* should reply to the sender.

## Step 4: Go live

1. Open **github.com/s44-star/lexconv/compare/main...site-v2**.
2. Tap **Create pull request**, then **Create pull request** again.
3. Wait for the green tick from Vercel (about 1 minute), then tap **Merge pull request** → **Confirm merge**.
4. About 1 minute later, lexconv.com shows the new site.

If the address from Step 1 is still empty, the production build stops with an error that names the missing field, and the old site stays live. Fill it in on the `main` branch the same way as Step 1. Vercel rebuilds by itself.

**To undo:** Vercel → **Deployments** → open the previous production deployment → **⋯** → **Instant Rollback**.

## Step 5: Make www.lexconv.com work (DNS, 3 minutes)

### What's already set (don't change anything here)

| Type | Host | Value | Status |
|---|---|---|---|
| A | `@` | `216.198.79.1` | ✅ Already points lexconv.com to Vercel, and Vercel confirms it is correct. **Leave it.** |

Because the new site uses the same Vercel project and the same domain, the root record doesn't need to change.

### The one record to add

`www.lexconv.com` has no DNS record right now, so it doesn't open at all. It is also attached to an old duplicate Vercel project called **`lexconv-wtco`**, so first move it:

1. Vercel → project **lexconv-wtco** → **Settings** → **Domains** → next to `www.lexconv.com` tap **⋯** → **Remove**.
2. Vercel → project **lexconv** → **Settings** → **Domains** → **Add Domain** → type `www.lexconv.com` → choose **Redirect to lexconv.com** (308) → **Save**.

Then add this record at Namecheap:

| Type | Host | Value | TTL |
|---|---|---|---|
| **CNAME** | `www` | `647719bf5a8d0da5.vercel-dns-017.com.` | Automatic |

On your phone:

1. Open **namecheap.com** → **Domain List** → **lexconv.com** → **Manage** → **Advanced DNS** (switch to desktop view in the browser if the tab is hidden).
2. Under **Host Records**, look for an existing record with Host `www`.
   - If there is one, tap **edit** on that record and change it to the CNAME above. Don't add a second `www` record.
   - If there isn't one, tap **Add New Record** → **CNAME Record**.
3. Host: `www`. Target/Value: `647719bf5a8d0da5.vercel-dns-017.com.` TTL: Automatic.
4. Tap the **green tick** to save.
5. In Vercel → **Settings** → **Domains**, `www.lexconv.com` turns to *Valid Configuration* within a few minutes, and sometimes up to an hour.

**Optional cleanup:** `lexconv-wtco` is a second Vercel project connected to the same GitHub repo, so every change gets built twice. Once `www` is moved, open **lexconv-wtco** → **Settings** → scroll down → **Delete Project**. This doesn't affect lexconv.com, which runs on the **lexconv** project.

### Records you must not touch

| Record | Why it matters |
|---|---|
| CNAME `coldchain` | The ColdChain OS app (coldchain.lexconv.com) |
| TXT `resend._domainkey` | Proves to inboxes that Resend may send as lexconv.com (DKIM) |
| CNAME / MX / TXT `send` and CNAME `rsend` | Resend's bounce handling and tracking |
| TXT `_dmarc` | E-mail anti-spoofing policy |
| MX records (and any SPF TXT on `@`) | Delivers mail to ceo@lexconv.com |
| A `@` | Points lexconv.com to Vercel, already correct |

You change nothing at Namecheap except adding the single `www` CNAME.

## Step 6: Razorpay and Google

**Razorpay** (Dashboard → Account & Settings → Website/app details). These are the policy links:

| Razorpay asks for | URL |
|---|---|
| About us | https://lexconv.com/about |
| Contact us | https://lexconv.com/contact |
| Pricing | https://lexconv.com/pricing |
| Terms and conditions | https://lexconv.com/terms |
| Privacy policy | https://lexconv.com/privacy |
| Cancellation and refund policy | https://lexconv.com/refunds |
| Shipping/delivery policy | https://lexconv.com/delivery |

**Google:** open **search.google.com/search-console**, add `lexconv.com` (the "Domain" option needs one TXT record at Namecheap; that is an *addition* and doesn't affect anything above). Then go to **Sitemaps** and submit `https://lexconv.com/sitemap.xml`. To remove old pages from results faster, use **Removals** → **New request** with the old URL.

---

## Changing content later

| To change | Edit this file |
|---|---|
| Business name and address | `src/content/company.ts` |
| Products, prices, features | `src/content/products.ts` |
| Home page text | `src/app/page.tsx` |
| About page | `src/app/about/page.tsx` |
| Legal pages | `src/app/terms/page.tsx`, `privacy/page.tsx`, `refunds/page.tsx`, `delivery/page.tsx` |
| "Last updated" date on legal pages | `src/content/site.ts` |

Edit on the `site-v2` branch, check the preview, then merge into `main` as in Step 4.

**Prices:** keep `src/content/products.ts` matching coldchain.lexconv.com/pricing.
