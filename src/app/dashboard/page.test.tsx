import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import DashboardPage from "./page";
import { AuthProvider } from "../../features/auth/auth-context";
import { CartProvider } from "../../features/cart/cart-context";
import { createOrder, clearOrders } from "../../features/orders/order-service";

describe("Dashboard", () => {
  it("shows empty state when no orders exist", () => {
    render(
      <AuthProvider>
        <CartProvider>
          <DashboardPage />
        </CartProvider>
      </AuthProvider>
    );

    expect(
      screen.getByText(/no orders yet/i)
    ).toBeInTheDocument();
  });

  it("shows orders when they exist", () => {
    clearOrders();

    createOrder("test@email.com", [
      {
        product: {
          id: "iphone-16",
          name: "iPhone 16",
          description: "",
          price: 1000,
          category: "smartphone",
          imageUrl: "",
          inStock: true,
        },
        quantity: 1,
      },
    ]);

    render(
      <AuthProvider>
        <CartProvider>
          <DashboardPage />
        </CartProvider>
      </AuthProvider>
    );

    expect(
      screen.getByText(/iphone 16/i)
    ).toBeInTheDocument();
  });
});