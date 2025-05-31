# 🧠 AI-Powered Interview Prep Platform

A full-stack, production-grade platform that simulates technical interviews using AI and real-time code execution. Built with a scalable monorepo architecture, it offers personalized feedback, intelligent question generation, and structured progress tracking — ideal for aspiring software developers targeting FAANG-level roles.

---

## 🚀 Tech Stack

### 📦 Monorepo
- **Turborepo** – High-performance monorepo management

### 🌐 Frontend
- **Next.js (App Router)**
- **Tailwind CSS**
- **TypeScript**

### 🧠 AI + Code Engine
- **OpenAI API (GPT-4)** – Question generation, feedback, evaluation
- **Judge0 API** – Code execution for C++, Python, JavaScript

### 🔐 Authentication
- **NextAuth.js** – Google/GitHub OAuth and credential-based login

---

## ✨ Features

- 🎙️ **AI Interview Simulation** — Domain-based questions (DSA, System Design, HR)
- 🧑‍💻 **Live Code Editor** — Supports multiple languages with execution via Judge0
- 💬 **Instant Feedback** — Evaluate responses based on correctness, clarity, depth
- 📊 **Performance Analytics** — Track your progress and growth
- 💾 **Session History** — Save and review past interviews

---

## 🗂️ Project Structure

ai-interview-platform/
├── apps/
│ └── web/ # Frontend (Next.js)
├── packages/
│ ├── ui/ # Shared UI components
│ └── config/ # ESLint, Tailwind, TS config
└── .env # Environment variables

---

## ⚙️ Getting Started

### 1. Clone the repo

git clone https://github.com/ArindamBiswas10/ai-interview-platform.git
cd ai-interview-platform