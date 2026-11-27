# lexconv.com

The LexConv company website. Next.js (App Router) + TypeScript + Tailwind CSS, deployed on Vercel.

- **Deploy and DNS guide (phone-friendly):** see [DEPLOY.md](./DEPLOY.md)
- **Business name and address:** `src/content/company.ts`
- **Products and prices:** `src/content/products.ts`
- **Page copy:** `src/app/**/page.tsx`

## Pages

| Path | Page |
|---|---|
| `/` | Home |
| `/products` | Products |
| `/pricing` | Pricing |
| `/about` | About us |
| `/contact` | Contact (form posts to `/api/contact`) |
| `/terms` | Terms and conditions |
| `/privacy` | Privacy policy |
| `/refunds` | Cancellation and refund policy |
| `/delivery` | Delivery policy |

`/about`, `/contact`, `/pricing`, `/terms`, `/privacy` and `/refunds` are required by our Razorpay account. Do not rename or remove them.

## Environment variables

See `.env.example`. Only `RESEND_API_KEY` is required.

## Running locally (optional, needs a computer)

```bash
npm install
npm run dev
```

The old static site (FCED and Mahakal Lab pages) is preserved on the `archive/fced-static-site` branch.
