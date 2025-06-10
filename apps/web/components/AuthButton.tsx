"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm">Hi, {session.user?.name}</span>
        <button
          onClick={() => signOut()}
          className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("google")}
      className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
    >
      Sign in with Google
    </button>
  );
}
