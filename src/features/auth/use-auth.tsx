"use client";

import { useState } from "react";

type User = {
  email: string;
};

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string) => {
    setUser({ email });
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,
    isAuthenticated: !!user,
    login,
    logout,
  };
}