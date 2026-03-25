'use client'
import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    category: 'Frontend & Frameworks',
    icon: '⚡',
    color: 'var(--accent)',
    skills: [
      { name: 'React.js / Next.js', level: 75 },
      { name: 'HTML / CSS / JavaScript', level: 85 },
      { name: 'Tailwind CSS / Bootstrap', level: 80 },
      { name: 'TypeScript', level: 55 },
    ]
  },
  {
    category: 'Design UX/UI',
    icon: '🎨',
    color: 'var(--accent2)',
    skills: [
      { name: 'Figma', level: 75 },
      { name: 'Canva', level: 85 },
      { name: 'Prototypage', level: 70 },
      { name: 'Design System', level: 60 },
    ]
  },
  {
    category: 'Backend & Base de données',
    icon: '🛠️',
    color: 'var(--accent3)',
    skills: [
      { name: 'PHP / Laravel', level: 60 },
      { name: 'Python / FastAPI', level: 65 },
      { name: 'SQL (Oracle, MySQL, Postgres)', level: 70 },
      { name: 'Node.js', level: 50 },
    ]
  },
  {
    category: 'Langages & Autres',
    icon: '💻',
    color: '#f59e0b',
    skills: [
      { name: 'Java / C/C++', level: 55 },
      { name: 'Git / GitHub', level: 75 },
      { name: 'Bureautique (Word, Excel...)', level: 90 },
      { name: 'Anglais technique', level: 50 },
    ]
  },
]

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Tailwind', 'Figma', 'Laravel', 'FastAPI',
  'Python', 'JavaScript', 'Node.js', 'PostgreSQL', 'Git', 'Bootstrap', 'HTML5', 'CSS3', 'MySQL'
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100)
          })
          // Animate skill bars
          setTimeout(() => {
            e.target.querySelectorAll('.skill-fill').forEach(el => {
              el.classList.add('animated')
            })
          }, 400)
        }
      })
    }, { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} style={{
      padding: '100px 24px',
      background: 'linear-gradient(180deg, transparent, rgba(108,99,255,0.03), transparent)'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 70 }}>
          <div className="reveal" style={{ marginBottom: 12 }}>
            <span className="section-label">02 — Compétences</span>
          </div>
          <h2 className="section-title reveal">
            Mon <span className="gradient-text">arsenal</span> technique
          </h2>
        </div>

        {/* Skills grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginBottom: 60 }}
          className="skills-grid">
          {skillGroups.map((group, gi) => (
            <div key={gi} className="reveal" style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 20, padding: 28,
              transition: 'border-color 0.3s',
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = `${group.color}40`}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${group.color}15`, border: `1px solid ${group.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem'
                }}>{group.icon}</div>
                <div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>{group.category}</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {group.skills.map((skill, si) => (
                  <div key={si}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: 500 }}>{skill.name}</span>
                      <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.7rem', color: group.color }}>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{
                        ['--fill-width' as string]: `${skill.level / 100}`,
                        transform: 'scaleX(0)',
                        background: `linear-gradient(90deg, ${group.color}, ${group.color}99)`
                      } as React.CSSProperties} data-width={skill.level / 100} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech marquee */}
        <div className="reveal" style={{ overflow: 'hidden', position: 'relative' }}>
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: 80,
            background: 'linear-gradient(90deg, var(--bg), transparent)', zIndex: 1
          }} />
          <div style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: 80,
            background: 'linear-gradient(-90deg, var(--bg), transparent)', zIndex: 1
          }} />
          <div className="marquee-inner" style={{ display: 'flex', gap: 16, padding: '8px 0' }}>
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={i} style={{
                padding: '8px 20px',
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 30, fontSize: '0.8rem', color: 'var(--muted)',
                fontFamily: 'Space Mono, monospace', whiteSpace: 'nowrap', flexShrink: 0
              }}>
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Soft skills */}
        <div style={{ marginTop: 60, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}
          className="soft-grid">
          {[
            { icon: '🎯', title: 'Rigueur', desc: 'Organisé et méthodique' },
            { icon: '🧠', title: 'Analytique', desc: 'Résolution de problèmes' },
            { icon: '🤝', title: 'Équipe', desc: 'Bon esprit collaboratif' },
            { icon: '⚡', title: 'Adaptable', desc: 'Apprentissage rapide' },
            { icon: '🚀', title: 'Initiative', desc: 'Sens des responsabilités' },
          ].map((s, i) => (
            <div key={i} className="reveal" style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 16, padding: '20px 16px', textAlign: 'center',
              transition: 'all 0.3s'
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(108,99,255,0.3)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.transform = 'none'; }}
            >
              <div style={{ fontSize: '1.8rem', marginBottom: 10 }}>{s.icon}</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#fff', fontSize: '0.85rem', marginBottom: 4 }}>{s.title}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
          .soft-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        .skill-fill.animated {
          transition: transform 1.2s cubic-bezier(0.4,0,0.2,1) !important;
        }
      `}</style>
    </section>
  )
}
