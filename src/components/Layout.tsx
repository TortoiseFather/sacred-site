import { Link } from 'react-router-dom'


export default function Layout({ title, children }: { title?: string; children: React.ReactNode }) {
return (
<div>
<header style={{ borderBottom: '1px solid #e5e7eb' }}>
<div className="container" style={{ display: 'flex', gap: 16, alignItems: 'center', paddingTop: 16, paddingBottom: 16 }}>
<Link to="/" style={{ fontWeight: 800, fontSize: 18, color: '#0f172a' }}>SACRED</Link>
<span className="small">Safe Autonomy of Complex Railway Environments within a Digital space</span>
</div>
</header>
<main className="container">
{title && <h1>{title}</h1>}
{children}
</main>
<footer>
<div className="container">© {new Date().getFullYear()} All rights reserved, 'The Cafe' 2020-2025.  <Link to="/contact">Contact</Link></div>
</footer>
</div>
)
}