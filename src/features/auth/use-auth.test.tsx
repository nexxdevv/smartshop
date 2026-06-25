import { renderHook, act } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { useAuth } from "./use-auth";

describe("useAuth", () => {
  it("logs in a user", () => {
    const { result } = renderHook(() => useAuth());

    act(() => {
      result.current.login("test@email.com");
    });

    expect(result.current.user).toEqual({
      email: "test@email.com",
    });

    expect(result.current.isAuthenticated).toBe(true);
  });

  it("logs out a user", () => {
    const { result } = renderHook(() => useAuth());

    act(() => {
      result.current.login("test@email.com");
      result.current.logout();
    });

    expect(result.current.user).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
  });
});