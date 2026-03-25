'use client'
import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 120)
          })
        }
      })
    }, { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate form submission
    await new Promise(r => setTimeout(r, 1500))
    setStatus('sent')
    setTimeout(() => {
      setStatus('idle')
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 4000)
  }

  const inputStyle = {
    width: '100%', padding: '14px 16px',
    background: 'var(--surface)', border: '1px solid var(--border)',
    borderRadius: 10, color: 'var(--text)', fontSize: '0.9rem',
    fontFamily: 'DM Sans, sans-serif', outline: 'none',
    transition: 'border-color 0.3s'
  }

  return (
    <section id="contact" ref={sectionRef} style={{
      padding: '100px 24px 80px',
      background: 'linear-gradient(180deg, transparent, rgba(108,99,255,0.04))'
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 70 }}>
          <div className="reveal" style={{ marginBottom: 12 }}>
            <span className="section-label">04 — Contact</span>
          </div>
          <h2 className="section-title reveal">
            Travaillons <span className="gradient-text">ensemble</span>
          </h2>
          <p className="reveal" style={{ color: 'var(--muted)', maxWidth: 480, margin: '16px auto 0', lineHeight: 1.7 }}>
            Disponible pour des projets freelance, des stages ou des opportunités d'emploi. N'hésitez pas à me contacter !
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 40 }}
          className="contact-grid">

          {/* Left - Info */}
          <div>
            <div className="reveal" style={{ marginBottom: 24 }}>
              <div style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 20, padding: 28
              }}>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#fff', marginBottom: 8, fontSize: '1.1rem' }}>
                  Mamadou Oury DIALLO
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: 24 }}>
                  Développeur Full Stack & UX/UI Designer basé à Conakry, Guinée.
                  Passionné par la création d'expériences web modernes.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    {
                      icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                      label: 'Email', value: 'ourying2003@gmail.com',
                      href: 'mailto:ourying2003@gmail.com', color: 'var(--accent)'
                    },
                    {
                      icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.93 12 19.79 19.79 0 011.98 3.38 2 2 0 013.96 1.22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9a16 16 0 006.29 6.29l1.17-1.17a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
                      label: 'Téléphone', value: '+224 627 30 60 60',
                      href: 'tel:+224627306060', color: 'var(--accent2)'
                    },
                    {
                      icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>,
                      label: 'GitHub', value: 'Oury-Tech',
                      href: 'https://github.com/Oury-Tech', color: 'var(--accent3)'
                    },
                    {
                      icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
                      label: 'LinkedIn', value: 'Mamadou Oury Diallo',
                      href: 'https://www.linkedin.com/in/mamadou-oury-diallo', color: 'var(--accent)'
                    },
                  ].map(c => (
                    <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', gap: 14,
                        padding: '12px 16px', borderRadius: 10,
                        background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                        textDecoration: 'none', transition: 'all 0.3s', color: 'inherit'
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${c.color}40`; (e.currentTarget as HTMLElement).style.background = `${c.color}08`; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)'; }}
                    >
                      <div style={{
                        width: 36, height: 36, borderRadius: 8,
                        background: `${c.color}15`, border: `1px solid ${c.color}30`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: c.color, flexShrink: 0
                      }}>{c.icon}</div>
                      <div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--muted)', marginBottom: 1 }}>{c.label}</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: 500 }}>{c.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="reveal">
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 20, padding: 32
            }}>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#fff', marginBottom: 24 }}>
                Envoyez-moi un message
              </h3>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--muted)', marginBottom: 8, fontWeight: 500 }}>Nom complet</label>
                    <input
                      type="text" required placeholder="Votre nom"
                      value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                      style={inputStyle}
                      onFocus={e => (e.target as HTMLElement).style.borderColor = 'rgba(108,99,255,0.5)'}
                      onBlur={e => (e.target as HTMLElement).style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--muted)', marginBottom: 8, fontWeight: 500 }}>Email</label>
                    <input
                      type="email" required placeholder="votre@email.com"
                      value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                      style={inputStyle}
                      onFocus={e => (e.target as HTMLElement).style.borderColor = 'rgba(108,99,255,0.5)'}
                      onBlur={e => (e.target as HTMLElement).style.borderColor = 'var(--border)'}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--muted)', marginBottom: 8, fontWeight: 500 }}>Sujet</label>
                  <input
                    type="text" placeholder="Objet du message"
                    value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}
                    style={inputStyle}
                    onFocus={e => (e.target as HTMLElement).style.borderColor = 'rgba(108,99,255,0.5)'}
                    onBlur={e => (e.target as HTMLElement).style.borderColor = 'var(--border)'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--muted)', marginBottom: 8, fontWeight: 500 }}>Message</label>
                  <textarea
                    required rows={5} placeholder="Décrivez votre projet ou votre demande..."
                    value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 120 } as React.CSSProperties}
                    onFocus={e => (e.target as HTMLElement).style.borderColor = 'rgba(108,99,255,0.5)'}
                    onBlur={e => (e.target as HTMLElement).style.borderColor = 'var(--border)'}
                  />
                </div>

                <button type="submit" className="btn-primary"
                  style={{ marginTop: 8, justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}
                  disabled={status === 'sending' || status === 'sent'}
                >
                  {status === 'idle' && (<><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Envoyer le message</>)}
                  {status === 'sending' && '⏳ Envoi en cours...'}
                  {status === 'sent' && '✅ Message envoyé !'}
                  {status === 'error' && '❌ Erreur, réessayez'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
