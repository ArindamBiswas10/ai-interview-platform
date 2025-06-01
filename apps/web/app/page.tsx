export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-20">
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
    </main>
  );
}
