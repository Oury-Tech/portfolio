'use client'
import { useState, useEffect } from 'react'

const links = [
  { href: '#hero', label: 'Accueil' },
  { href: '#about', label: 'À propos' },
  { href: '#skills', label: 'Compétences' },
  { href: '#projects', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = links.map(l => l.href.replace('#', ''))
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(`#${id}`)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all 0.4s ease',
      background: scrolled ? 'rgba(7,7,20,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#hero" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.2rem', color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              width: 32, height: 32, background: 'var(--accent)', borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.75rem', fontWeight: 700, color: '#fff'
            }}>MO</span>
            <span className="gradient-text">Oury.dev</span>
          </a>

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="hidden-mobile">
            {links.map(l => (
              <a key={l.href} href={l.href} className={`nav-link ${active === l.href ? 'active' : ''}`} style={{ textDecoration: 'none' }}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary" style={{ padding: '9px 20px', fontSize: '0.8rem', textDecoration: 'none' }}>
              Me contacter
            </a>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: 5, padding: 8 }} className="show-mobile">
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block', width: 22, height: 2, background: '#fff',
                borderRadius: 2, transition: 'all 0.3s',
                transform: menuOpen ? (i === 0 ? 'rotate(45deg) translate(5px,5px)' : i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'scaleX(0)') : 'none'
              }} />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            background: 'rgba(14,14,36,0.98)', border: '1px solid var(--border)',
            borderRadius: 12, padding: 24, marginBottom: 16,
            display: 'flex', flexDirection: 'column', gap: 20
          }}>
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: 500 }}>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
