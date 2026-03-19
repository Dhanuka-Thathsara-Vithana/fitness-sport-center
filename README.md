# 🏋️ Fitness Sport Center

A responsive promotional website for a local fitness brand, built as part of the **KonceptHive Web Development Internship Evaluation**. The site showcases the gym's services, membership plans, trainers, and includes a fully functional contact form.

---

## 🔗 Links

- **Live Demo:** https://fitness-sport-center-ivory.vercel.app/
- **Figma Design:** https://www.figma.com/design/YkMLetIbjP45pAPFMFefZ6/Gym-Website-UI?node-id=0-1&t=myRmgB1BRaGxBV36-1
- **GitHub Repository:** https://github.com/Dhanuka-Thathsara-Vithana/fitness-sport-center.git

---

## 🛠️ Tech Stack

| Category        | Technology                          |
|-----------------|-------------------------------------|
| Framework       | React 18 + TypeScript               |
| Build Tool      | Vite 5                              |
| Styling         | Tailwind CSS 3                      |
| Icons           | Lucide React                        |
| Email Service   | EmailJS (`@emailjs/browser`)        |
| Linting         | ESLint + TypeScript ESLint          |

---

## 📁 Project Structure

```
fitness-sport-center/
└── Frontend/
    ├── public/
    ├── src/
    │   ├── assets/
    │   │   ├── images/         # Brand assets (logo, etc.)
    │   │   └── styles/         # Global CSS
    │   ├── components/
    │   │   ├── layout/         # Navbar, Footer, AnnouncementBar
    │   │   ├── ui/             # Reusable UI: Button, InputField, SectionTitle
    │   │   └── FormFeedback.tsx
    │   ├── hooks/              # useContactForm, useIntersection
    │   ├── sections/           # Page sections (Hero, About, Services, etc.)
    │   ├── services/           # emailService.ts (EmailJS integration)
    │   ├── types/              # Shared TypeScript types
    │   ├── utils/              # Form validation helpers
    │   ├── App.tsx
    │   └── main.tsx
    ├── index.html
    ├── package.json
    └── vite.config.ts
```

---

## 📄 Page Sections

The home page includes the following sections:

- **Announcement Bar** — Dismissible top banner
- **Navbar** — Sticky, responsive navigation
- **Hero** — Full-screen intro with CTA
- **About** — Brand story and mission
- **Results** — Stats and achievements
- **How It Works** — Step-by-step process
- **Services** — Gym service offerings
- **Trainers** — Featured trainer profiles
- **Plans** — Membership pricing tiers
- **Guarantee Banner** — Trust/satisfaction guarantee
- **FAQ** — Frequently asked questions
- **Contact** — Inquiry form with EmailJS integration
- **Footer**

---

## ✉️ Contact Form

The contact form collects: **Name**, **Email**, **Phone** (optional), **Subject**, and **Message**. It includes:

- Client-side validation (required fields, email format)
- Success/error feedback on submission
- Real email delivery via **EmailJS**

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Dhanuka-Thathsara-Vithana/fitness-sport-center.git
cd fitness-sport-center/Frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the `Frontend/` directory and add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> You can get these from your [EmailJS dashboard](https://www.emailjs.com/).

### 4. Start the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### 5. Build for production

```bash
npm run build
```

---

## 🚀 Deployment

This project can be deployed to any static hosting platform (Vercel, Netlify, GitHub Pages, etc.).

Example with Vercel CLI:
```bash
npm run build
vercel deploy ./dist
```

---

## 📝 License

This project was created for evaluation purposes as part of the KonceptHive Web Development Internship.
