import Link from 'next/link';

export default function Home() {
  return (
    <div style={styles.container}>
      <h1>🌟 Welcome to AetherCrown10</h1>
      <p>A production-ready web application with CI/CD, testing, and monitoring.</p>
      
      <div style={styles.links}>
        <Link href="/status" style={styles.link}>
          View Status Dashboard →
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '100px 20px',
    textAlign: 'center',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  links: {
    marginTop: '40px',
  },
  link: {
    display: 'inline-block',
    padding: '12px 24px',
    backgroundColor: '#0070f3',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: '500',
  },
};
