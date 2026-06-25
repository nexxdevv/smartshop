import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { AddToCartButton } from "./add-to-cart-button";
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

describe("AddToCartButton", () => {
  it("calls addToCart when clicked", () => {
    const addToCart = vi.fn();

    render(
      <AddToCartButton
        product={product}
        onAddToCart={addToCart}
      />
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /add to cart/i,
      })
    );

    expect(addToCart).toHaveBeenCalledTimes(1);
    expect(addToCart).toHaveBeenCalledWith(product);
  });
});