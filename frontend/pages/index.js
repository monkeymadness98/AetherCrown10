import React from 'react'

export default function Home() {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'MISSING_CLIENT_ID'
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || '/api'

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1>AetherCrown10 — Frontend</h1>
      <p>PayPal Client ID: <strong>{clientId}</strong></p>
      <p>API URL (frontend): <strong>{apiUrl}</strong></p>
      <p>
        This is a minimal Next.js frontend created by the automated fix PR. To integrate PayPal, set
        NEXT_PUBLIC_PAYPAL_CLIENT_ID in Vercel and use the server API routes to call PayPal APIs with
        PAYPAL_SECRET set server-side.
      </p>
      <button onClick={async () => {
        try {
          const res = await fetch('/api/health')
          const text = await res.text()
          alert('Server response: ' + text)
        } catch (err) {
          alert('Error calling /api/health: ' + err.message)
        }
      }}>Check server (api/health)</button>
    </div>
  )
}
