'use client'
import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100)
          })
        }
      })
    }, { threshold: 0.08 })

    document.querySelectorAll('section').forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Skill bar animation via IntersectionObserver
  useEffect(() => {
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-fill').forEach(el => {
            const bar = el as HTMLElement
            const width = bar.dataset.width || '0'
            bar.style.transform = `scaleX(${width})`
          })
        }
      })
    }, { threshold: 0.2 })
    document.querySelectorAll('section').forEach(s => skillObserver.observe(s))
    return () => skillObserver.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
