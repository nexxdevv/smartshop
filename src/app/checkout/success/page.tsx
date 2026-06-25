"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/dashboard");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <main className="p-8 text-center space-y-4">
      <h1 className="text-3xl font-bold text-green-600">
        Order Successful 🎉
      </h1>

      <p>You’ll be redirected to your dashboard shortly...</p>
    </main>
  );
}