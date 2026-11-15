# S.M. Sadik — Interactive VFX & AI Engineering Portfolio (portfolio_1)

> **Shaik Mohhamed Sadik (S.M. Sadik)**  
> 1st-Year B.Tech Computer Science & Engineering (AI & ML)  
> Joy University | Roll No: `2026BTAI434`

An editorial dark-and-crimson cinematic studio portfolio inspired by non-linear editing (NLE) software (Premiere Pro, DaVinci Resolve, After Effects) and collaborative studio canvases (Figma).

---

## ⚡ Tech Stack

- **Framework:** React 18 + Vite 6 + TypeScript
- **Styling:** Tailwind CSS (Dark industrial theme `#09090b`, electric crimson `#ef4444`, monospace timecodes)
- **Motion & VFX:**
  - Framer Motion (magnetic mouse followers, spring physics, 3D tilt cards)
  - GSAP + ScrollTrigger (3-layer hero sequence, staggered text entrances)
  - Lenis (weighted momentum smooth scrolling)
  - Web Animations API (high-performance 35ms throttled ghost cursor trail)
- **Icons:** Lucide React

---

## 🛠️ Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🚀 Deployment to Vercel via GitHub

### Step 1: Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new).
2. Name the repository `portfolio_1`.
3. Leave it Public and do not initialize with a README (one is already included).
4. Upload all files from this project (excluding `node_modules`).

### Step 2: Deploy to Vercel
1. Go to [vercel.com/new](https://vercel.com/new).
2. Sign in with GitHub.
3. Import your **`portfolio_1`** repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**. Your portfolio will be live in under 60 seconds with free SSL and continuous deployment!
