'use client'
import { useEffect, useRef } from 'react'

const timeline = [
  {
    year: '2021 – Présent',
    title: 'Ingénieur d\'État (en cours)',
    place: 'Université Kofi Annan de Guinée, Conakry',
    desc: 'Génie Informatique — 1ère à 4ème année validées avec mention',
    color: 'var(--accent)'
  },
  {
    year: '2024 – Présent',
    title: 'Responsable Commission Technique',
    place: 'ASEEP — Université Kofi Annan, Nongo',
    desc: 'Supervision des activités techniques, coordination des projets numériques',
    color: 'var(--accent2)'
  },
  {
    year: '2024 – 2025',
    title: 'Formation UX/UI Design',
    place: 'Orange Digital Center, Ratoma Cyber',
    desc: 'Maquettage Figma, principes d\'ergonomie, design d\'interfaces modernes',
    color: 'var(--accent3)'
  },
  {
    year: '2023 – 2024',
    title: 'Formation ReactJS',
    place: 'Orange Digital Center, Ratoma Cyber',
    desc: 'Développement d\'applications web dynamiques, composants réutilisables',
    color: 'var(--accent)'
  },
  {
    year: '2020 – 2021',
    title: 'Baccalauréat Unique — Sciences Math',
    place: 'G-S Privée Cdt Lansana Camara, Kamsar',
    desc: 'Profil Sciences Mathématiques',
    color: 'var(--muted)'
  },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section id="about" ref={sectionRef} style={{ padding: '100px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 70 }}>
          <div className="reveal" style={{ marginBottom: 12 }}>
            <span className="section-label">01 — À propos</span>
          </div>
          <h2 className="section-title reveal" style={{ marginBottom: 20 }}>
            Mon <span className="gradient-text">parcours</span>
          </h2>
          <p className="reveal" style={{ color: 'var(--muted)', maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
            De Kamsar à Conakry, du Bac à l'Ingéniorat, voici mon histoire académique et professionnelle.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}
          className="about-grid">

          {/* Left - Bio */}
          <div>
            <div className="reveal" style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 20, padding: 32, marginBottom: 24
            }}>
              <div style={{ marginBottom: 20, display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem'
                }}>💡</div>
                <div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#fff' }}>Profil</div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>Développeur & Designer</div>
                </div>
              </div>
              <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: '0.95rem' }}>
                Je suis <strong style={{ color: 'var(--text)' }}>Mamadou Oury DIALLO</strong>, étudiant en 5ème année d'Ingénierie Informatique.
                Passionné par la création d'interfaces modernes et de solutions web performantes.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: '0.95rem', marginTop: 14 }}>
                Je combine mes compétences en <strong style={{ color: 'var(--accent)' }}>développement front-end</strong> (React, Next.js)
                et en <strong style={{ color: 'var(--accent2)' }}>design UX/UI</strong> pour créer des expériences numériques impactantes.
              </p>
            </div>

            {/* Info grid */}
            <div className="reveal" style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12
            }}>
              {[
                { icon: '📍', label: 'Localisation', value: 'Conakry, Guinée' },
                { icon: '🎓', label: 'Formation', value: 'UKAS — Génie Info' },
                { icon: '📧', label: 'Email', value: 'ourying2003@gmail.com' },
                { icon: '📱', label: 'Téléphone', value: '+224 627 30 60 60' },
                { icon: '🌐', label: 'GitHub', value: 'Oury-Tech' },
                { icon: '💼', label: 'Statut', value: 'Ouvert au recrutement' },
              ].map(item => (
                <div key={item.label} style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 12, padding: '14px 16px'
                }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--muted)', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span>{item.icon}</span> {item.label}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: 500, wordBreak: 'break-all' }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Timeline */}
          <div style={{ paddingLeft: 24, position: 'relative' }}>
            <div style={{
              position: 'absolute', left: 0, top: 0, bottom: 0, width: 1,
              background: 'linear-gradient(to bottom, var(--accent), rgba(108,99,255,0.1))'
            }} />
            {timeline.map((item, i) => (
              <div key={i} className="reveal" style={{
                position: 'relative', paddingBottom: 32, paddingLeft: 8
              }}>
                {/* Dot */}
                <div style={{
                  position: 'absolute', left: -28, top: 4,
                  width: 10, height: 10, borderRadius: '50%',
                  background: item.color,
                  boxShadow: `0 0 12px ${item.color}`,
                  border: '2px solid var(--bg)'
                }} />

                <div style={{
                  fontFamily: 'Space Mono, monospace', fontSize: '0.68rem',
                  color: item.color, marginBottom: 6, letterSpacing: '0.05em'
                }}>{item.year}</div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#fff', marginBottom: 4 }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent)', marginBottom: 6, fontWeight: 500 }}>
                  {item.place}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.5 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
