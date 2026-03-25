'use client'
import { useEffect, useRef } from 'react'

const projects = [
  {
    title: 'RevoluClean',
    subtitle: 'Application Web',
    desc: 'Plateforme de services de nettoyage révolutionnaire. Interface moderne permettant aux utilisateurs de réserver des services de nettoyage professionnels en ligne avec un système de gestion complet.',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'Laravel'],
    github: 'https://github.com/Oury-Tech/revoluclean',
    color: 'var(--accent)',
    gradient: 'linear-gradient(135deg, rgba(108,99,255,0.15) 0%, rgba(108,99,255,0.03) 100%)',
    icon: '🧹',
    featured: true,
  },
  {
    title: 'ASEEP Platform',
    subtitle: 'Plateforme Associative',
    desc: 'Plateforme numérique de l\'Association des Étudiants de l\Ecole Polytechnique des INGENIEURS UKAG. Gestion des membres, événements, ressources et activités de l\'association.',
    tags: ['Next.js', 'JavaScript', 'CSS', 'Node.js'],
    github: 'https://github.com/moussadjoulde/assep',
    color: 'var(--accent2)',
    gradient: 'linear-gradient(135deg, rgba(255,101,132,0.12) 0%, rgba(255,101,132,0.02) 100%)',
    icon: '🎓',
    featured: true,
  },
  {
    title: 'Currency Devices',
    subtitle: 'Outil de Conversion',
    desc: 'Application de conversion de devises en temps réel. Interface intuitive pour convertir entre différentes monnaies internationales avec des taux actualisés.',
    tags: ['Flutter', 'API', 'Dart', 'Laravel'],
    github: 'https://github.com/Oury-Tech/Currency_devices',
    color: 'var(--accent3)',
    gradient: 'linear-gradient(135deg, rgba(67,233,123,0.12) 0%, rgba(67,233,123,0.02) 100%)',
    icon: '💱',
    featured: false,
  },
]

function GitHubIcon() {
  return (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 150)
          })
        }
      })
    }, { threshold: 0.05 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 70 }}>
          <div className="reveal" style={{ marginBottom: 12 }}>
            <span className="section-label">03 — Projets</span>
          </div>
          <h2 className="section-title reveal">
            Ce que j'ai <span className="gradient-text">construit</span>
          </h2>
          <p className="reveal" style={{ color: 'var(--muted)', maxWidth: 480, margin: '16px auto 0', lineHeight: 1.7 }}>
            Des projets réels qui reflètent mes compétences techniques et ma créativité.
          </p>
        </div>

        {/* Projects grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
          className="projects-grid">
          {projects.map((project, i) => (
            <div key={i} className="reveal project-card" style={{ position: 'relative' }}>
              {/* Card header with gradient */}
              <div style={{
                background: project.gradient,
                padding: '28px 28px 20px',
                borderBottom: '1px solid var(--border)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <div style={{
                    width: 50, height: 50, borderRadius: 14,
                    background: `${project.color}20`, border: `1px solid ${project.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem'
                  }}>{project.icon}</div>
                  {project.featured && (
                    <span style={{
                      fontSize: '0.65rem', padding: '4px 10px',
                      background: `${project.color}20`, border: `1px solid ${project.color}40`,
                      borderRadius: 20, color: project.color,
                      fontFamily: 'Space Mono, monospace', letterSpacing: '0.1em'
                    }}>FEATURED</span>
                  )}
                </div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.15rem', color: '#fff', marginBottom: 4 }}>
                  {project.title}
                </div>
                <div style={{ fontSize: '0.75rem', color: project.color, fontWeight: 500 }}>{project.subtitle}</div>
              </div>

              {/* Card body */}
              <div style={{ padding: '20px 28px 24px' }}>
                <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: 20 }}>
                  {project.desc}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: '0.7rem', padding: '4px 10px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--border)',
                      borderRadius: 6, color: 'var(--muted)',
                      fontFamily: 'Space Mono, monospace'
                    }}>{tag}</span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: 12 }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                    className="btn-outline"
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = project.color}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(108,99,255,0.4)'}
                  >
                    <GitHubIcon />
                    Voir le code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: 50 }}>
          <a href="https://github.com/Oury-Tech" target="_blank" rel="noopener noreferrer"
            className="btn-outline" style={{ textDecoration: 'none' }}>
            <GitHubIcon />
            Voir tous mes projets sur GitHub
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
