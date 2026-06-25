"use client";

import { useState } from "react";
import { useAuthContext } from "../../features/auth/auth-context";

export default function LoginPage() {
  const { login, user } = useAuthContext();
  const [email, setEmail] = useState("");

  if (user) {
    return (
      <main className="p-8">
        <h1>Welcome {user.email}</h1>
      </main>
    );
  }

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">
        Login
      </h1>

      <input
        placeholder="email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        className="border p-2"
      />

      <button
        onClick={() => login(email)}
        className="bg-black text-white px-4 py-2"
      >
        Login
      </button>
    </main>
  );
}