'use client'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '40px 24px',
      background: 'rgba(7,7,20,0.9)'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#fff', fontSize: '1rem' }}>
          <span className="gradient-text">Oury.dev</span>
        </div>
        <p style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>
          © {year} Mamadou Oury DIALLO — Construit avec Next.js & ❤️
        </p>
        <div style={{ display: 'flex', gap: 20 }}>
          {[
            { href: 'https://github.com/Oury-Tech', label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/mamadou-oury-diallo', label: 'LinkedIn' },
            { href: 'mailto:ourying2003@gmail.com', label: 'Email' },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--muted)', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--accent)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--muted)'}
            >{l.label}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
