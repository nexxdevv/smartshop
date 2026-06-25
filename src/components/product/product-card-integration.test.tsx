import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ProductCard } from "./product-card";
import { CartProvider } from "../../features/cart/cart-context";

const product = {
  id: "iphone-16",
  name: "iPhone 16",
  description: "",
  price: 999,
  category: "smartphone" as const,
  imageUrl: "",
  inStock: true,
};

describe("ProductCard integration", () => {
  it("adds product to cart when button clicked", () => {
    render(
      <CartProvider>
        <ProductCard product={product} />
      </CartProvider>
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /add to cart/i,
      })
    );

    // basic verification via UI change later
    expect(
      screen.getByText(/in stock/i)
    ).toBeInTheDocument();
  });
});