<div align="center">

# 🔧 Serwis Kół — Premium Automotive Website

**A modern, high-end website for a professional tire & air conditioning service shop.**  
Built with Next.js 16, Tailwind CSS v4, and a dark glassmorphism design system.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-serwis--kol.vercel.app-da291c?style=for-the-badge&logo=vercel&logoColor=white)](https://serwis-kol.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

</div>

---

## ✨ Features

- 🎨 **Premium Dark Design** — Deep black background with red accent colors, glassmorphism cards and cinematic vignette effects
- 📱 **Fully Responsive** — Mobile-first with a full-screen hamburger menu for phones
- 🎬 **Scroll Animations** — Custom `ScrollReveal` component using `IntersectionObserver` for smooth `fade-up`, `fade-left`, `fade-right`, and `zoom-in` entrance animations
- 🏷️ **Interactive Pricing Table** — Switchable tabs (Vulcanization / Air Conditioning) with a vehicle type toggle
- ❓ **FAQ Accordion** — Smooth expanding/collapsing FAQ section
- 🗺️ **Google Maps Embed** — Interactive map with grayscale-to-color hover effect
- ♾️ **Marquee Animation** — Infinite scrolling brand logo strip (16 tire brands)
- ⚡ **Optimized Images** — Next.js `<Image>` with `priority`, `sizes`, and `fill` for LCP performance
- 🔒 **Legal Pages** — Privacy Policy (`/polityka-prywatnosci`) and Terms of Service (`/regulamin`)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** (App Router) | Framework, routing, SSG |
| **Tailwind CSS v4** | Styling & design system |
| **TypeScript** | Type safety |
| **Lucide React** | Icons |
| **Vercel** | Hosting & deployment |

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Fr3zz0-ux/SerwisKol.git
cd SerwisKol

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Main page — assembles all sections
│   ├── layout.tsx                  # Root layout with metadata & fonts
│   ├── globals.css                 # Global styles & CSS variables
│   ├── polityka-prywatnosci/       # Privacy Policy page
│   └── regulamin/                  # Terms of Service page
└── components/
    ├── Navbar.tsx                  # Sticky navbar with mobile hamburger menu
    ├── Hero.tsx                    # Full-screen hero section
    ├── Logos.tsx                   # Animated brand marquee
    ├── Services.tsx                # Tire & AC service sections
    ├── Features.tsx                # Glassmorphism bento box features
    ├── Pricing.tsx                 # Interactive pricing table
    ├── Testimonials.tsx            # Customer reviews with star ratings
    ├── Faq.tsx                     # Accordion FAQ section
    ├── Gallery.tsx                 # Photo gallery
    ├── Footer.tsx                  # Contact info, map & legal links
    ├── ScrollReveal.tsx            # Scroll-triggered animation engine
    └── Teaser.tsx                  # Video teaser section
```

---

## 🎨 Design Highlights

The design follows a **luxury automotive brand** aesthetic:

- **Color palette:** Near-black `#050505` background · Red accent `#da291c` → `#ff4b3e` gradient
- **Typography:** Montserrat (Black 900 for headings, Light 300 for body)
- **Cards:** Glassmorphism — `backdrop-blur-xl` + `bg-white/5` + `border-white/5`
- **Glow effects:** `box-shadow` with `rgba(218,41,28,0.X)` for red ambient light
- **Animations:** CSS transitions + `IntersectionObserver`-based scroll reveals

---

## 📦 Deployment

The project is deployed on **Vercel** with automatic production builds.

```bash
# Deploy to production manually
npx vercel --prod --yes
```

---

<div align="center">

Made with ❤️ by **[Mateusz Bogacki](https://github.com/Fr3zz0-ux)**

</div>
