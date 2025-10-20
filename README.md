# AetherCrown10

This PR adds a minimal Next.js frontend (frontend/) and converts the simple backend into Next.js API routes deployed as Vercel serverless functions.

Local development:
1. Install dependencies:
   - cd frontend && npm install
2. Create a .env.local in the project root or in frontend with the variables from .env.example
3. Run locally with Vercel CLI:
   - npm i -g vercel
   - vercel dev

Environment variables to set on Vercel (Project → Settings → Environment Variables):
- NEXT_PUBLIC_PAYPAL_CLIENT_ID (public, used by frontend at build/runtime)
- NEXT_PUBLIC_API_URL (public, optional)
- PAYPAL_SECRET (server-only)
- API_URL (server-only)

Notes:
- Do NOT commit secret values to the repository. Use Vercel Project settings to store secrets.
- After merging, set the environment variables in Vercel and deploy.