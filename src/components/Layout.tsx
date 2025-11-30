import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Layout({
  title,
  children
}: {
  title?: string
  children: React.ReactNode
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <header
        style={{
          borderBottom: '1px solid #e5e7eb',
          backgroundColor: '#f4f4f8ff',
          position: 'relative' // so the dropdown can be positioned inside
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            gap: 6,
            alignItems: 'center',
            paddingTop: 16,
            paddingBottom: 16
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Link to="/" className="logo">
              <img
                src="/Images/logo.png"
                alt="SACRED"
                style={{ height: '32px', width: 'auto', verticalAlign: 'middle' }}
              />
            </Link>
            <Link
              to="/"
              style={{ fontWeight: 800, fontSize: 18, color: '#0f172a' }}
            >
              SACRED:
            </Link>
            <span className="small">
              Safe Autonomy of Complex Railway Environments within a Digital space
            </span>
          </div>

          {/* Spacer to push menu to the right */}
          <div style={{ marginLeft: 'auto', position: 'relative' }}>
            {/* Burger button */}
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(open => !open)}
              style={{
                border: '1px solid #e5e7eb',
                background: '#ffffff',
                borderRadius: 6,
                padding: '6px 8px',
                cursor: 'pointer'
              }}
            >
              {/* Simple burger icon */}
              <div
                style={{
                  width: 20,
                  height: 2,
                  marginBottom: 3,
                  backgroundColor: '#0f172a'
                }}
              />
              <div
                style={{
                  width: 20,
                  height: 2,
                  marginBottom: 3,
                  backgroundColor: '#0f172a'
                }}
              />
              <div
                style={{
                  width: 20,
                  height: 2,
                  backgroundColor: '#0f172a'
                }}
              />
            </button>

            {/* Dropdown menu */}
            {menuOpen && (
              <nav
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 'calc(100% + 8px)',
                  backgroundColor: '#f4f4f8ff',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                  borderRadius: 8,
                  zIndex: 20,
                  minWidth: 160
                }}
              >
                <ul
                  style={{
                    listStyle: 'none',
                    margin: 0,
                    padding: '4px 0'
                  }}
                >
                  <li>
                    <Link
                      to="/"
                      onClick={() => setMenuOpen(false)}
                      style={{
                        display: 'block',
                        padding: '8px 16px',
                        textDecoration: 'none',
                        color: '#0f172a'
                      }}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      onClick={() => setMenuOpen(false)}
                      style={{
                        display: 'block',
                        padding: '8px 16px',
                        textDecoration: 'none',
                        color: '#0f172a'
                      }}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/papers"
                      onClick={() => setMenuOpen(false)}
                      style={{
                        display: 'block',
                        padding: '8px 16px',
                        textDecoration: 'none',
                        color: '#0f172a'
                      }}
                    >
                      Papers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      onClick={() => setMenuOpen(false)}
                      style={{
                        display: 'block',
                        padding: '8px 16px',
                        textDecoration: 'none',
                        color: '#0f172a'
                      }}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </div>
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
          <span className="footer-left">
            © {new Date().getFullYear()} All rights reserved
          </span>
          <span className="footer-center">'The Cafe' 2020–2025</span>
          <Link className="footer-right" to="/contact">
            Contact me.
          </Link>
        </div>
      </footer>
    </div>
  )
}
