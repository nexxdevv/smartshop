import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ProductCard } from "./product-card";
import { CartProvider } from "../../features/cart/cart-context";

const product = {
  id: "iphone-16",
  name: "iPhone 16",
  description: "Latest Apple smartphone",
  price: 999,
  category: "smartphone" as const,
  imageUrl: "",
  inStock: true,
};

function renderWithProvider() {
  return render(
    <CartProvider>
      <ProductCard product={product} />
    </CartProvider>
  );
}

describe("ProductCard", () => {
  it("renders product name", () => {
    renderWithProvider();

    expect(
      screen.getByRole("heading", { name: /iphone 16/i })
    ).toBeInTheDocument();
  });

  it("renders price", () => {
    renderWithProvider();

    expect(screen.getByText("$999")).toBeInTheDocument();
  });

  it("renders category", () => {
    renderWithProvider();

    expect(screen.getByText(/smartphone/i)).toBeInTheDocument();
  });

  it("shows stock status", () => {
    renderWithProvider();

    expect(screen.getByText(/in stock/i)).toBeInTheDocument();
  });
});