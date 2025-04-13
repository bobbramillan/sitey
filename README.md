# Bavanan Bramillan — Personal Portfolio

This is my personal developer portfolio built with **Next.js 13**, **TypeScript**, **Tailwind CSS**, and more. It showcases my projects, skills, experience, and contact form — all designed with a modern, responsive layout and smooth animations.

## 🚀 Live Site

👉 [https://sitey-lovat.vercel.app/](https://sitey-lovat.vercel.app/)  
_(Replace this with your deployed URL if different)_

---

## 📌 Features

- Built with **Next.js 13 App Router**
- **Server Actions** to handle contact form email sending (via Resend)
- **Client + Server components** with optimized performance
- Beautiful **animations** using **Framer Motion**
- Custom **React Hooks** (e.g., active section tracking)
- Built-in **dark mode** toggle
- **Responsive design** across all devices
- Clean and accessible **UI/UX**

---

## 📂 Project Structure

```
/
├── app/                → Main app with layout and routes
├── components/         → Reusable UI elements (Header, Footer, etc.)
├── context/            → React Context (Theme, Section tracking)
├── email/              → React email template
├── lib/                → Hooks & utility functions
├── public/             → Static assets (images, PDF resume)
├── styles/             → Global styles
└── send-email.ts       → Server action for sending emails
```

---

## 🛠️ Technologies

- Next.js 13 (App Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Resend (email API)
- React Email
- Custom Hooks
- GitHub Pages or Vercel (for deployment)

---

## 📧 Contact Form Setup

1. Sign up at [resend.com](https://resend.com) and verify a domain.
2. Add your API key in a `.env.local` file:

```env
RESEND_API_KEY=your_api_key_here
```

3. Edit the `send-email.ts` file and update the `to` field with your email address:

```ts
to: "you@example.com"
```

4. Deploy your site with [Vercel](https://vercel.com) or your preferred method.

---

## 📁 Projects Featured

- **NBA Player Performance App** – ML-powered stat predictor with Streamlit + Scikit-learn.
- **Drexel Shell (C)** – UNIX-style shell with pipes, redirection, and background job support.
- **Face Counter App** – OpenCV-based Python tool for detecting and counting people in live video.

---

## 🧠 About Me

I’m **Bavanan Bramillan**, a Software Engineering student at **Drexel University** passionate about building scalable, user-focused applications and systems. I enjoy solving real-world problems and continuously learning new technologies.

---

## 🔗 Connect with Me

- [LinkedIn](https://linkedin.com/in/bavananb)
- [GitHub](https://github.com/bobbramillan)
- [Website](https://bobbramillan.github.io/sitey)
- 📧 bob.bramillan@gmail.com

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
