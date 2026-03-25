# 🚀 Portfolio — Mamadou Oury DIALLO

Portfolio professionnel construit avec **Next.js 14**, **TypeScript** et **Tailwind CSS**.

## 🎨 Stack
- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Styles** : Tailwind CSS + CSS animations custom
- **Fonts** : Syne, DM Sans, Space Mono

## ⚡ Lancer en local

```bash
npm install
npm run dev
# Ouvrir http://localhost:3000
```

## 🌐 Déploiement Vercel (GRATUIT — ~2 min)

### Étape 1 — Pousser sur GitHub
```bash
git init
git add .
git commit -m "🚀 Initial commit"
git branch -M main
git remote add origin https://github.com/Oury-Tech/portfolio.git
git push -u origin main
```

### Étape 2 — Déployer
1. Aller sur **https://vercel.com** → "New Project"
2. Importer votre repo GitHub
3. Cliquer **"Deploy"** → ✅ En ligne en 2 minutes !

Votre URL sera : `https://portfolio-oury.vercel.app` (personnalisable)

## 📧 Activer le vrai formulaire (Formspree — gratuit)
1. Créer un compte sur https://formspree.io
2. Créer un formulaire, copier votre ID
3. Dans `components/Contact.tsx`, remplacer la simulation :
```tsx
const response = await fetch('https://formspree.io/f/VOTRE_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form)
})
```

## 📁 Structure
```
portfolio/
├── app/
│   ├── globals.css    # Animations + design system
│   ├── layout.tsx     # SEO metadata
│   └── page.tsx       # Page principale
├── components/
│   ├── Navbar.tsx     # Navigation responsive
│   ├── Hero.tsx       # Section accueil + typing effect
│   ├── About.tsx      # Parcours + timeline
│   ├── Skills.tsx     # Compétences animées
│   ├── Projects.tsx   # Projets GitHub
│   ├── Contact.tsx    # Formulaire
│   └── Footer.tsx
└── public/
    └── profile.jpg    # Votre photo
```
