# 🤖 AI Interview Prep Platform

An AI-powered platform to help you ace tech interviews through GPT-generated questions, real-time coding practice, and smart feedback — all in one place. BUILT FOR INTERVIEW.

[![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI_API-412991?logo=openai&logoColor=white)](https://platform.openai.com/)
[![NextAuth](https://img.shields.io/badge/Auth-NextAuth.js-black?logo=nextdotjs)](https://next-auth.js.org/)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🎯 Overview

This platform combines the power of **Next.js**, **OpenAI**, and **NextAuth** to create a seamless interview prep experience. Users can log in, generate interview questions, and (coming soon) solve problems in a live editor with AI-based feedback.

---


## 🔗 Live Demo

**🌍 Deployed on Vercel:**  
[https://ai-interview-platform.vercel.app](https://ai-interview-platform.vercel.app)

**🎥 Demo Walkthrough (YouTube/loom):**  
[Watch here](https://your-video-link.com)

---

## 🚀 Features

- 🔐 Google OAuth Login via `NextAuth.js`
- 💡 AI-powered Interview Question Generation (OpenAI)
- 💬 (Planned) Smart AI Feedback on User Code
- ⌨️ (Planned) Integrated Live Coding Editor (Monaco/CodeMirror)
- 📈 (Planned) Session History & Progress Analytics
- 🧑‍🎓 User-friendly UI built with TailwindCSS + App Router

---

## 🧱 Tech Stack

| Layer           | Technology                           |
| --------------- | ------------------------------------ |
| Frontend        | Next.js 14, TypeScript, Tailwind CSS |
| Authentication  | NextAuth.js with Google OAuth        |
| AI Integration  | OpenAI GPT API                       |
| State Management| React Hooks                          |
| Planned Backend | MongoDB, Prisma, Judge0 API          |

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/arindambiswas/ai-interview-platform.git
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
