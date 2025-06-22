# 🤖 AI Interview Prep Platform

An AI-powered platform to help you ace tech interviews through GPT-generated questions, real-time coding practice, and smart feedback — all in one place.

[![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI_API-412991?logo=openai&logoColor=white)](https://platform.openai.com/)
[![NextAuth](https://img.shields.io/badge/Auth-NextAuth.js-black?logo=nextdotjs)](https://next-auth.js.org/)

---

## 🚀 Features

- ✅ **Google Authentication** (via `next-auth`)
- 🧠 **AI-Generated Interview Questions** using OpenAI
- ⌨️ **Live Coding Environment** (coming soon)
- 💬 **AI Feedback** on submitted code (coming soon)
- 📊 **Session History & Progress Tracking** (planned)
- 💻 Built with **Next.js App Router**, **TypeScript**, and **TailwindCSS**

---

## 📦 Tech Stack

- **Frontend:** Next.js 14, TypeScript, TailwindCSS  
- **Authentication:** `next-auth` with Google OAuth  
- **AI:** OpenAI API  
- **State Management:** React hooks  
- **Future Enhancements:** MongoDB, Prisma, Judge0 API

---

## 🛠️ Getting Started

```bash
# 1. Clone the Repository
git clone https://github.com/your-username/ai-interview-platform.git
cd ai-interview-platform

# 2. Install Dependencies
npm install
# or
yarn install

# 3. Set Up Environment Variables
# Create a `.env.local` file in the root and add the following:

# .env.local
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=http://localhost:3000

# 4. Run Locally
npm run dev
