# AetherCrown10 — PayPal Integration (Example)

This PR adds a minimal Next.js frontend and a PayPal serverless function (sandbox) to demonstrate creating PayPal orders server-side. It keeps secrets server-side (PAYPAL_SECRET) and exposes only the public client id (NEXT_PUBLIC_PAYPAL_CLIENT_ID) to the frontend.

## Local testing

1. Copy .env.example to create your env files:
   - In repo root: create a file named `.env` and add `PAYPAL_SECRET=your_paypal_secret` (used by serverless functions locally with vercel dev)
   - In frontend: create `frontend/.env.local` and add `NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id`

2. Install dependencies:
   - cd frontend && npm install

3. Run locally with vercel dev (from repo root):
   - Install Vercel CLI if you don't have it: `npm i -g vercel`
   - Run `vercel dev`

4. Open http://localhost:3000 and test "Create Sandbox Order". The example serverless function will call PayPal sandbox endpoints.

## Vercel configuration

- Add these environment variables in the Vercel project settings (do NOT expose PAYPAL_SECRET to the client):
  - NEXT_PUBLIC_PAYPAL_CLIENT_ID (value: your client id)
  - PAYPAL_SECRET (value: your secret)

## Notes

- The serverless function uses PayPal SANDBOX endpoints. After verification, switch to live endpoints (`api-m.paypal.com`) and update env values.
- Do not expose PAYPAL_SECRET to the browser or commit secrets to the repo.