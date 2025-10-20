const fetch = globalThis.fetch || require('node-fetch');

module.exports = async (req, res) => {
  try {
    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
    const secret = process.env.PAYPAL_SECRET;
    if (!clientId || !secret) {
      return res.status(500).json({ error: 'Missing PayPal environment variables' });
    }

    // 1) Get OAuth token from PayPal (SANDBOX)
    const auth = Buffer.from(`${clientId}:${secret}`).toString('base64');
    const tokenResp = await fetch('https://api-m.sandbox.paypal.com/v1/oauth2/token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials'
    });
    const tokenJson = await tokenResp.json();
    if (!tokenResp.ok) return res.status(502).json({ error: 'Failed to fetch PayPal token', details: tokenJson });
    const accessToken = tokenJson.access_token;

    // 2) Create an order (SANDBOX)
    const orderResp = await fetch('https://api-m.sandbox.paypal.com/v2/checkout/orders', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [{ amount: { currency_code: 'USD', value: '1.00' } }]
      })
    });

    const orderJson = await orderResp.json();
    res.status(orderResp.ok ? 201 : 502).json(orderJson);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
