import { useEffect, useState } from 'react';

export default function Status() {
  const [status, setStatus] = useState(null);
  const [health, setHealth] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
        
        // Fetch API status
        const statusResponse = await fetch(`${apiUrl}/api/v1/status`);
        if (!statusResponse.ok) {
          throw new Error(`Status API error: ${statusResponse.status}`);
        }
        const statusData = await statusResponse.json();
        setStatus(statusData);

        // Fetch health check
        const healthResponse = await fetch(`${apiUrl}/health`);
        if (!healthResponse.ok) {
          throw new Error(`Health API error: ${healthResponse.status}`);
        }
        const healthData = await healthResponse.json();
        setHealth(healthData);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStatus();
  }, []);

  if (loading) {
    return (
      <div style={styles.container}>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.container}>
        <h1 style={styles.error}>Error</h1>
        <p>{error}</p>
        <p style={styles.hint}>
          Make sure the backend is running and NEXT_PUBLIC_API_URL is set correctly.
        </p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1>🚀 AetherCrown10 Status Dashboard</h1>
      
      <div style={styles.section}>
        <h2>API Status</h2>
        {status && (
          <div style={styles.card}>
            <p><strong>Status:</strong> {status.success ? '✅ Operational' : '❌ Down'}</p>
            <p><strong>Message:</strong> {status.message}</p>
            <p><strong>Timestamp:</strong> {new Date(status.timestamp).toLocaleString()}</p>
          </div>
        )}
      </div>

      <div style={styles.section}>
        <h2>Health Check</h2>
        {health && (
          <div style={styles.card}>
            <p><strong>Status:</strong> {health.status === 'ok' ? '✅ Healthy' : '❌ Unhealthy'}</p>
            <p><strong>Uptime:</strong> {Math.floor(health.uptime)} seconds</p>
            <p><strong>Version:</strong> {health.version}</p>
            <p><strong>Environment:</strong> {health.environment}</p>
            <p><strong>Timestamp:</strong> {new Date(health.timestamp).toLocaleString()}</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  section: {
    marginTop: '30px',
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
  },
  error: {
    color: '#d32f2f',
  },
  hint: {
    color: '#666',
    fontSize: '14px',
    marginTop: '10px',
  },
};
