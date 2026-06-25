import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Navbar } from "./navbar";
import { CartProvider } from "../../features/cart/cart-context";
import { ProductCard } from "../../components/product/product-card";

const product = {
  id: "iphone-16",
  name: "iPhone 16",
  description: "",
  price: 999,
  category: "smartphone" as const,
  imageUrl: "",
  inStock: true,
};

describe("Navbar integration", () => {
  it("updates cart count when product is added", () => {
    render(
      <CartProvider>
        <Navbar />
        <ProductCard product={product} />
      </CartProvider>
    );

    // initial state
    expect(screen.getByText("0")).toBeInTheDocument();

    // click add to cart
    fireEvent.click(
      screen.getByRole("button", {
        name: /add to cart/i,
      })
    );

    // updated state
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});