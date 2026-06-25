import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Navbar } from "./navbar";
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

describe("Navbar", () => {
  it("shows empty cart count initially", () => {
    render(
      <CartProvider>
        <Navbar />
      </CartProvider>,
    );

    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
