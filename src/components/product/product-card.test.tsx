// src/components/product/product-card.test.tsx

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ProductCard } from "./product-card";

const product = {
  id: "iphone-16",
  name: "iPhone 16",
  description: "Latest Apple smartphone",
  price: 999,
  category: "smartphone" as const,
  imageUrl: "/iphone.jpg",
  inStock: true,
};

describe("ProductCard", () => {
  it("renders product name", () => {
    render(<ProductCard product={product} />);

    expect(
      screen.getByRole("heading", {
        name: /iphone 16/i,
      })
    ).toBeInTheDocument();
  });

  it("renders price", () => {
    render(<ProductCard product={product} />);

    expect(screen.getByText("$999")).toBeInTheDocument();
  });

  it("renders category", () => {
    render(<ProductCard product={product} />);

    expect(screen.getByText(/smartphone/i)).toBeInTheDocument();
  });

  it("shows stock status", () => {
    render(<ProductCard product={product} />);

    expect(screen.getByText(/in stock/i)).toBeInTheDocument();
  });
});