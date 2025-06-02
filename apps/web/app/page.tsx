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
    </main>
  );
}
