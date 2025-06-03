const features = [
  {
    title: "AI-Powered Questions",
    desc: "Smart interview questions tailored to your skills and goals, generated using OpenAI.",
  },
  {
    title: "Live Code Execution",
    desc: "Practice in a real-time code editor with multi-language support via Judge0.",
  },
  {
    title: "Instant Feedback",
    desc: "Get AI-generated feedback on correctness, structure, and clarity after each session.",
  },
  {
    title: "Track Progress",
    desc: "Visualize your growth with session history and performance analytics.",
  },
];

const steps = [
  {
    title: "1. Select Skill & Role",
    desc: "Choose your preferred domain like Frontend, Backend, or DSA, and let us tailor your session.",
  },
  {
    title: "2. Start Mock Interview",
    desc: "Get a real-time interview experience powered by GPT and an interactive code editor.",
  },
  {
    title: "3. Review & Improve",
    desc: "Receive instant feedback, learn from mistakes, and track your performance over time.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-20 space-y-24">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">
          Ace Your Tech Interviews with AI
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Practice with GPT-powered mock interviews and real-time code feedback — all in one place.
        </p>
        <a
          href="/auth"
          className="inline-block bg-black text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-800 transition"
        >
          Start Practicing
        </a>
      </div>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
        {features.map((f) => (
          <div
            key={f.title}
            className="border rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* How It Works Section */}
      <section className="max-w-5xl mx-auto text-center space-y-12">
        <h2 className="text-4xl font-bold">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
