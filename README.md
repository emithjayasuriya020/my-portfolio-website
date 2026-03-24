# Emith Jayasuriya • Portfolio

A premium, high-performance portfolio website built to showcase software engineering expertise, creative projects, and technical skills. Designed with a focus on fluid animations, glassmorphic UI, and clean typography.

✨ **Live at:** [your-deployment-link.vercel.app](https://your-deployment-link.vercel.app)

---

## 🚀 Key Features

-   🌊 **Premium Animations**: Smooth, staggered scroll-reveal effects and floating background elements for a dynamic feel.
-   📱 **Fully Responsive**: Optimized for all devices, from mobile phones to high-resolution desktops.
-   🛠 **Interactive Showcases**: Specialized sections for projects (with GitHub integration), skills (glassmorphic cards), and a professional CV summary.
-   ✉️ **Functional Contact Form**: Integrated with **Web3Forms API** for real-time message delivery without a dedicated backend.
-   🎨 **Modern Design System**: A bespoke palette of Navy, Gold, and Cream using Tailwind CSS and custom glassmorphism.

---

## 🛠 Tech Stack

-   **Framework**: [Next.js 15+ (App Router)](https://nextjs.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: Pure CSS Keyframes & Intersection Observer API
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Contact**: [Web3Forms](https://web3forms.com/)
-   **Deployment**: [Vercel](https://vercel.com/)

---

## 🧱 Project Structure

```text
src/
├── app/             # Next.js App Router (Layouts & Main Page)
│   ├── globals.css  # Global styles & Custom Animations
│   └── page.tsx     # Main page entry point
├── components/
│   ├── common/      # Reusable UI elements (Buttons, Tags, Headers)
│   ├── nav/         # Fixed Navigation with scroll-syncing
│   └── sections/    # Modular page sections (Hero, About, Skills, etc.)
└── public/          # Static assets (Images, CV, Favicons)
```

---

## 🚦 Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18.x or higher recommended).

### 2. Clone the Repository
```bash
git clone https://github.com/emithjayasuriya020/my-portfolio-website.git
cd my-portfolio-website
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Setup Web3Forms (Optional but Recommended)
To make the contact form functional, get your free access key from [Web3Forms](https://web3forms.com/) and update the key in `src/components/sections/Contact.tsx`.

### 5. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio in action.

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Connect
- **LinkedIn**: [Emith Jayasuriya](https://www.linkedin.com/in/emith-jayasuriya-3a4265316)
- **GitHub**: [@emithjayasuriya020](https://github.com/emithjayasuriya020)
- **Email**: emithjayasuriya@yahoo.com
