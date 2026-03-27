# 🏥 Jarurat Care

> **AI-Powered Healthcare Support Network** — Connecting patients, volunteers, and resources with real-time intelligence across 42 cities in India.

---

## 🌟 Overview

**Jarurat Care** is a full-stack NGO platform designed to streamline emergency healthcare support for underserved communities. The platform bridges the gap between patients in need, medical volunteers, NGO partners, and healthcare resources using AI-driven coordination and real-time data.

The application spans three core domains:
- **🩺 Patient Support** — Request urgent medical assistance, ambulance services, blood, oxygen, and more.
- **🤝 Volunteer Network** — Register skills, manage availability, receive AI-matched assignments.
- **🤖 AI Integration** — HOPE Chatbot (Groq LLM) and AI Case Summarization (Google Gemini).

---

## ✨ Features

| Feature | Description |
|---|---|
| **Patient Registration Form** | Multi-field clinical intake with urgency classification |
| **Volunteer Registration Form** | Skill-based signup with availability tracking |
| **HOPE AI Chatbot** | Instant medical FAQs powered by Groq (Llama 3.3 70B) |
| **AI Case Summarization** | Auto-generates clinical summaries via Google Gemini |
| **Impact Dashboard** | Animated live statistics with CountUp animations |
| **Multi-page Routing** | Home, Impact, and About Us pages via React Router |
| **Testimonials Marquee** | Infinite horizontal scroll with real stories |
| **Responsive Design** | Fully optimized for mobile, tablet, and wide desktop |
| **Firebase Integration** | Real-time data persistence for patients and volunteers |
| **Premium Glassmorphism UI** | Material Design 3 color system with custom animations |

---

## 🛠 Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| **React** | 19 | UI component library |
| **Vite** | 8 | Build tool & dev server |
| **TailwindCSS** | 4 | Utility-first CSS styling |
| **React Router DOM** | 7 | Client-side multi-page routing |
| **Material Symbols** | Latest | Icon system (Google) |

### Backend / Services
| Technology | Purpose |
|---|---|
| **Firebase Firestore** | NoSQL database for patient & volunteer form submissions |
| **Groq API** (Llama 3.3 70B) | Ultra-fast AI chatbot responses (~0.5s latency) |
| **Google Gemini API** | Clinical case summarization from form data |

### Design System
- **Color Palette**: Material Design 3 — Primary `#1A6B5A`, Secondary `#2E9D78`
- **Typography**: Plus Jakarta Sans (headlines), Inter (body text)
- **Effects**: Glassmorphism (`backdrop-filter: blur`), gradient overlays, spring micro-animations

---

## 🏗 Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     CLIENT (Browser)                     │
│                                                         │
│  ┌──────────┐  ┌─────────────┐  ┌───────────────────┐  │
│  │  Navbar  │  │ ScrollToTop │  │   HOPE Chatbot    │  │
│  │  (fixed) │  │  (on route) │  │ (Groq Llama 3.3) │  │
│  └──────────┘  └─────────────┘  └───────────────────┘  │
│                                                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │             React Router DOM (v7)                  │  │
│  │   /            /impact          /about             │  │
│  │   LandingPage  ImpactPage       AboutUsPage        │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
│  Landing Page Components:                               │
│  Hero → SupportServices → StatsSection → AboutSection   │
│  FormSection (PatientForm / VolunteerForm) → Testimonials│
└─────────────────────────────────────────────────────────┘
         │                   │                  │
         ▼                   ▼                  ▼
 ┌──────────────┐  ┌──────────────────┐  ┌─────────────┐
 │   Firestore  │  │   Groq Cloud     │  │   Gemini    │
 │ patients /   │  │  Llama 3.3 70B   │  │  Pro API    │
 │ volunteers   │  │  (Chat API)      │  │(Summarizer) │
 └──────────────┘  └──────────────────┘  └─────────────┘
```

### Data Flow

1. **Form Submission** → `PatientForm` / `VolunteerForm` → `firebase.js` → Firestore
2. **Chatbot Query** → `Chatbot.jsx` → `ai.js (callGroqApi)` → Groq Cloud → Response rendered
3. **Case Summary** → `CaseSummaryCard.jsx` → `ai.js (callGeminiApi)` → Gemini → Summary card
4. **Navigation** → `Navbar.jsx` → React Router → `ScrollToTop.jsx` resets scroll position

---

## 📁 Project Structure

```
jarurat-care-app/
├── public/
│   └── herosection.jpeg          # Hero background image
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Fixed top navbar with router links
│   │   ├── Hero.jsx              # Full-screen hero with floating stat cards
│   │   ├── SupportServices.jsx   # 3-card services grid
│   │   ├── StatsSection.jsx      # Animated CountUp impact metrics
│   │   ├── AboutSection.jsx      # Mission statement with feature cards
│   │   ├── FeaturesSection.jsx   # "Designed for Human Impact" feature grid
│   │   ├── FormSection.jsx       # Tab switcher for patient/volunteer forms
│   │   ├── PatientForm.jsx       # Clinical intake form → Firestore
│   │   ├── VolunteerForm.jsx     # Volunteer registration → Firestore
│   │   ├── Testimonials.jsx      # Infinite marquee testimonials
│   │   ├── CaseSummaryCard.jsx   # Gemini AI case summary display
│   │   ├── Chatbot.jsx           # HOPE AI chatbot (Groq powered)
│   │   ├── CustomSelect.jsx      # Accessible dropdown component
│   │   ├── ScrollToTop.jsx       # Route change scroll reset
│   │   └── Footer.jsx            # Site footer
│   ├── pages/
│   │   ├── LandingPage.jsx       # Home (/) — all main sections
│   │   ├── ImpactPage.jsx        # /impact — FeaturesSection + Stats
│   │   └── AboutUsPage.jsx       # /about — About + Stats
│   ├── services/
│   │   ├── firebase.js           # Firestore connection & export
│   │   └── ai.js                 # Groq + Gemini API wrappers
│   ├── App.jsx                   # Root component with Router + ScrollToTop
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Global styles, design tokens, animations
├── vercel.json                   # SPA routing fix for Vercel
└── package.json                  # Dependencies & scripts
```

---

<div align="center">
  <p>Built with ❤️ for human impact by the Jarurat Care team</p>
</div>
