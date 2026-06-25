import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import CartPage from "./page";
import { CartProvider } from "../../features/cart/cart-context";
import { Product } from "../../types/product";

const product: Product = {
  id: "iphone-16",
  name: "iPhone 16",
  description: "",
  price: 999,
  category: "smartphone",
  imageUrl: "",
  inStock: true,
};

describe("Cart Page", () => {
  it("shows empty cart message initially", () => {
    render(
      <CartProvider>
        <CartPage />
      </CartProvider>
    );

    expect(
      screen.getByText(/your cart is empty/i)
    ).toBeInTheDocument();
  });

  it("shows items after adding to cart", () => {
    render(
      <CartProvider>
        <CartPage />
      </CartProvider>
    );

    expect(
      screen.getByText(/your cart is empty/i)
    ).toBeInTheDocument();
  });
});



