# Earnest Achayo — Next.js Portfolio

A professional, animated single-page portfolio built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

---

## 🖼️ Updating Your Profile Photo

Open `app/data/portfolio.ts` and change the `avatar` field:

```ts
// Paste any public image URL here — your LinkedIn photo, GitHub avatar, Cloudinary link, etc.
avatar: "https://your-image-url.com/photo.jpg",
```

**Tips for getting a URL:**
- Upload to [Cloudinary](https://cloudinary.com) (free) and copy the delivery URL
- Use your GitHub avatar: `https://github.com/AchayoEarnest.png`
- Use [ui-avatars.com](https://ui-avatars.com) for a placeholder: `https://ui-avatars.com/api/?name=Earnest+Achayo&size=400`

---

## ✏️ Updating Portfolio Content

All content lives in **one file**: `app/data/portfolio.ts`

Edit the exported `PORTFOLIO` object to update:
- Name, title, summary, contact details
- Skills lists
- Work experience
- Projects (title, description, tools, GitHub link, accent color)
- Certifications & education

---

## 📁 Project Structure

```
app/
├── data/
│   └── portfolio.ts        ← ALL your content lives here
├── sections/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   └── Contact.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── RevealProvider.tsx
├── hooks/
│   └── useReveal.ts
├── globals.css
├── layout.tsx
└── page.tsx
```

---

## 🌐 Deployment

### Vercel (recommended — free)
```bash
npm install -g vercel
vercel
```
Or connect your GitHub repo at [vercel.com](https://vercel.com).

### Netlify
```bash
npm run build
# Upload the `.next` folder or connect your repo at netlify.com
```

---

## 🎨 Customising the Theme

Colors are defined via CSS variables in `app/globals.css`:

```css
:root {
  --bg: #04100f;           /* Page background */
  --bg-card: #071c1a;      /* Card background */
  --teal: #0d9488;         /* Primary accent */
  --teal-light: #2dd4bf;   /* Lighter accent / cursor */
}
```

Fonts (Google Fonts) are imported at the top of `globals.css`. Swap them freely.

---

## 📧 Contact Form

The form currently opens your mail client via `mailto:`. To use a real backend:

- **[Formspree](https://formspree.io)** — replace the `handleSubmit` logic with a `fetch` POST to your Formspree endpoint (free tier available).
- **[EmailJS](https://emailjs.com)** — send directly from the browser without a backend.
- **Next.js API Route** — create `app/api/contact/route.ts` and use Nodemailer or Resend.

---

Built with ❤️ in Kenya
