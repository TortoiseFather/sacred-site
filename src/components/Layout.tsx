import { Link } from 'react-router-dom'

export default function Layout({ title, children }: { title?: string; children: React.ReactNode }) {
return (
<div>
<header
  style={{
    borderBottom: '1px solid #e5e7eb',
    backgroundColor: '#f4f4f8ff'
  }}
>
<div className="container" style={{ display: 'flex', gap: 6, alignItems: 'center', paddingTop: 16, paddingBottom: 16 }}>
<Link to="/" className="logo">
    <img
      src="/Images/logo.png"
      alt="SACRED"
      style={{ height: '32px', width: 'auto', verticalAlign: 'middle' }}
    />
  </Link>
  <Link to="/" style={{ fontWeight: 800, fontSize: 18, color: '#0f172a' }}>SACRED:</Link>
<span className="small">Safe Autonomy of Complex Railway Environments within a Digital space</span>
</div>
</header>
<main className="container">
{title && <h1>{title}</h1>}
{children}
</main>
<footer
  className="footer-bar"
  style={{ backgroundColor: '#f4f4f8ff' }}
>
  <div className="footer-grid">
    <span>© {new Date().getFullYear()} All rights reserved</span>
    <span>'The Cafe' 2020–2025</span>
    <Link to="/contact">Contact me.</Link>
  </div>
</footer>
</div>
)
}