import { getServerSession } from "next-auth";
import { authOptions } from "../api/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/"); // redirect to home if not signed in
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center space-y-6 text-center">
      <div>
        <h1 className="text-4xl font-bold mb-2">Welcome, {session.user?.name} 👋</h1>
        <p className="text-gray-600">You're now viewing your personalized dashboard.</p>
      </div>

      {/* 🚀 Start Interview Button */}
      <Link
        href="/session"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
      >
        Start Interview
      </Link>
    </main>
  );
}
