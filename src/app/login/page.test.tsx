import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import LoginPage from "./page";
import { AuthProvider } from "../../features/auth/auth-context";

describe("Login Page", () => {
  it("logs user in", () => {
    render(
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    );

    fireEvent.change(
      screen.getByPlaceholderText(/email/i),
      {
        target: { value: "test@email.com" },
      }
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /login/i,
      })
    );

    expect(
      screen.getByText(/welcome/i)
    ).toBeInTheDocument();
  });
});