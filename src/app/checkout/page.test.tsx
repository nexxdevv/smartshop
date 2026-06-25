import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import CheckoutPage from "./page";
import { CartProvider } from "../../features/cart/cart-context";
import { AuthProvider } from "../../features/auth/auth-context";

describe("Checkout Page", () => {
  it("requires login", () => {
    render(
      <AuthProvider>
        <CartProvider>
          <CheckoutPage />
        </CartProvider>
      </AuthProvider>
    );

    expect(
      screen.getByText(/login required/i)
    ).toBeInTheDocument();
  });
});