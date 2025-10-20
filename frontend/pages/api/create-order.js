export default async function handler(req, res) {
  // This endpoint demonstrates reading a server-only secret (PAYPAL_SECRET)
  const secret = process.env.PAYPAL_SECRET
  if (!secret) {
    return res.status(500).json({ error: 'PAYPAL_SECRET not configured on server' })
  }
  // Do not perform real PayPal calls in this PR; return an example response
  return res.status(200).json({ message: 'Server has PAYPAL_SECRET configured (redacted)' })
}
