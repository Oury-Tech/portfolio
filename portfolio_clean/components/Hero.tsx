'use client'
import { useEffect, useState, useRef } from 'react'

const roles = ['Développeur Full Stack', 'UX/UI Designer', 'Ingénieur Logiciel', 'React & Next.js Dev']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const timeout = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const current = roles[roleIndex]
    if (!deleting && displayed.length < current.length) {
      timeout.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout.current = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }
    return () => clearTimeout(timeout.current)
  }, [displayed, deleting, roleIndex])

  return (
    <section id="hero" className="mesh-bg" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '100px 24px 80px', position: 'relative', overflow: 'hidden'
    }}>
      {/* Decorative circles */}
      <div style={{
        position: 'absolute', top: '15%', right: '8%',
        width: 400, height: 400,
        border: '1px solid rgba(108,99,255,0.12)',
        borderRadius: '50%', pointerEvents: 'none'
      }}>
        <div style={{
          position: 'absolute', inset: 40,
          border: '1px solid rgba(108,99,255,0.08)',
          borderRadius: '50%'
        }} />
        <div className="spin-slow" style={{
          position: 'absolute', inset: -20, borderRadius: '50%',
          border: '1px dashed rgba(108,99,255,0.15)'
        }} />
        {/* Orbiting dot */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          width: 8, height: 8, borderRadius: '50%',
          background: 'var(--accent)',
          boxShadow: '0 0 12px var(--accent)',
          animation: 'orbit 6s linear infinite',
          transformOrigin: '0 0',
        }} />
      </div>

      {/* Floating blobs */}
      <div className="pulse-slow" style={{
        position: 'absolute', bottom: '20%', left: '5%',
        width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(255,101,132,0.08) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}
          className="hero-grid">

          {/* Left - Text */}
          <div>
            <div className="fade-in-up delay-1" style={{ marginBottom: 20 }}>
              <span className="section-label" style={{ background: 'rgba(108,99,255,0.1)', padding: '6px 14px', borderRadius: 20, border: '1px solid rgba(108,99,255,0.2)' }}>
                👋 Bienvenue sur mon portfolio
              </span>
            </div>

            <h1 className="fade-in-up delay-2" style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 800,
              fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.1,
              letterSpacing: '-0.03em', marginBottom: 16, color: '#fff'
            }}>
              Mamadou Oury<br />
              <span className="gradient-text">DIALLO</span>
            </h1>

            <div className="fade-in-up delay-3" style={{
              fontFamily: 'Space Mono, monospace', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              color: 'var(--muted)', marginBottom: 24, height: 32, display: 'flex', alignItems: 'center'
            }}>
              <span style={{ color: 'var(--accent2)' }}>{'>'}</span>&nbsp;
              <span style={{ color: 'var(--text)' }}>{displayed}</span>
              <span className="typing-cursor" />
            </div>

            <p className="fade-in-up delay-4" style={{
              color: 'var(--muted)', lineHeight: 1.7, maxWidth: 460,
              fontSize: '1rem', marginBottom: 36
            }}>
              Étudiant en 5ème année de Génie Informatique à l'Université Kofi Annan de Guinée.
              Passionné par le développement web moderne, l'UX/UI Design et la création de solutions numériques impactantes.
            </p>

            <div className="fade-in-up delay-5" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-primary" style={{ textDecoration: 'none' }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12h18M13 6l6 6-6 6"/></svg>
                Voir mes projets
              </a>
              <a href="/CV_Mamadou_Oury_DIALLO.pdf" target="_blank" className="btn-outline" style={{ textDecoration: 'none' }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                Télécharger CV
              </a>
            </div>

            {/* Social links */}
            <div className="fade-in-up delay-5" style={{ display: 'flex', gap: 16, marginTop: 40, alignItems: 'center' }}>
              <span style={{ color: 'var(--muted)', fontSize: '0.75rem', fontFamily: 'Space Mono, monospace' }}>FOLLOW</span>
              <div style={{ width: 40, height: 1, background: 'var(--border)' }} />
              {[
                { href: 'https://github.com/Oury-Tech', label: 'GitHub', icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> },
                { href: 'https://www.linkedin.com/in/mamadou-oury-diallo', label: 'LinkedIn', icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                { href: 'mailto:ourying2003@gmail.com', label: 'Email', icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  title={s.label} style={{
                    width: 40, height: 40, borderRadius: 10,
                    border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--muted)', textDecoration: 'none',
                    transition: 'all 0.3s', background: 'var(--surface)'
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(108,99,255,0.5)'; (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--muted)'; (e.currentTarget as HTMLElement).style.transform = 'none'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Photo */}
          <div className="float fade-in-up delay-3" style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{ position: 'relative', width: 320, height: 380 }} className="hero-photo">
              {/* Decorative bg card */}
              <div style={{
                position: 'absolute', inset: -20, bottom: -30,
                background: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(255,101,132,0.08))',
                borderRadius: 24, border: '1px solid rgba(108,99,255,0.15)'
              }} />
              {/* Photo container */}
              <div className="glow-pulse" style={{
                position: 'relative', width: '100%', height: '100%',
                borderRadius: 20, overflow: 'hidden',
                border: '2px solid rgba(108,99,255,0.3)',
              }}>
                <img
                  src="/profile.jpg"
                  alt="Mamadou Oury DIALLO"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
                {/* Overlay gradient at bottom */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
                  background: 'linear-gradient(to top, rgba(7,7,20,0.8), transparent)'
                }} />
              </div>

              {/* Status badge */}
              <div style={{
                position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)',
                background: 'rgba(14,14,36,0.9)', border: '1px solid rgba(67,233,123,0.3)',
                borderRadius: 30, padding: '8px 18px',
                display: 'flex', alignItems: 'center', gap: 8,
                backdropFilter: 'blur(10px)', whiteSpace: 'nowrap'
              }}>
                <div style={{
                  width: 8, height: 8, borderRadius: '50%', background: '#43e97b',
                  boxShadow: '0 0 8px #43e97b', animation: 'blink 2s ease infinite'
                }} />
                <span style={{ fontSize: '0.75rem', color: '#e8e8f0', fontWeight: 500 }}>
                  Disponible pour freelance
                </span>
              </div>

              {/* Experience badge */}
              <div style={{
                position: 'absolute', top: 20, right: -20,
                background: 'var(--accent)', borderRadius: 12, padding: '12px 16px',
                textAlign: 'center', boxShadow: '0 8px 24px rgba(108,99,255,0.4)'
              }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#fff', lineHeight: 1 }}>5ème</div>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.8)', marginTop: 2 }}>année Ingé</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1, marginTop: 80, borderTop: '1px solid var(--border)', paddingTop: 40
        }} className="stats-grid fade-in-up delay-5">
          {[
            { value: '5+', label: 'Années d\'études' },
            { value: '3+', label: 'Projets GitHub' },
            { value: '2+', label: 'Certifications' },
          ].map((stat, i) => (
            <div key={i} style={{
              textAlign: 'center', padding: '0 20px',
              borderRight: i < 2 ? '1px solid var(--border)' : 'none'
            }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2.2rem', color: '#fff' }}>
                <span className="gradient-text">{stat.value}</span>
              </div>
              <div style={{ color: 'var(--muted)', fontSize: '0.85rem', marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8
      }}>
        <span style={{ fontSize: '0.50rem', color: 'var(--muted)', letterSpacing: '0.30em', fontFamily: 'Space Mono, monospace' }}>SCROLL</span>
        <div style={{
          width: 1, height: 30,
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
          animation: 'float 2s ease-in-out infinite'
        }} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-photo { width: 240px !important; height: 280px !important; }
          .stats-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(180px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(180px) rotate(-360deg); }
        }
        @keyframes pulse-slow {
          0%,100%{opacity:0.4;} 50%{opacity:0.8;}
        }
        .pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </section>
  )
}
