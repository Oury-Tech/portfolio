import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mamadou Oury DIALLO — Développeur Full Stack',
  description: 'Portfolio de Mamadou Oury DIALLO, étudiant ingénieur en développement logiciel. Spécialisé en React, Next.js, UX/UI Design.',
  keywords: ['développeur', 'portfolio', 'react', 'nextjs', 'fullstack', 'guinée'],
  authors: [{ name: 'Mamadou Oury DIALLO' }],
  openGraph: {
    title: 'Mamadou Oury DIALLO — Développeur Full Stack',
    description: 'Portfolio de Mamadou Oury DIALLO',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
