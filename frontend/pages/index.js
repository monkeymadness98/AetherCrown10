import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
    if (!clientId) {
      console.warn('NEXT_PUBLIC_PAYPAL_CLIENT_ID is not set');
      return;
    }
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const createOrder = async () => {
    try {
      const resp = await fetch('/api/payments/create-order', { method: 'POST' });
      const data = await resp.json();
      console.log('create-order response:', data);
      alert(JSON.stringify(data, null, 2));
    } catch (err) {
      console.error(err);
      alert('Error creating order: ' + err.message);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>PayPal Integration Test</h1>
      <button onClick={createOrder} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
        Create Sandbox Order
      </button>
    </div>
  );
}
