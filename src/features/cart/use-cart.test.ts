import { renderHook, act } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { useCart } from "./use-cart";

const product = {
  id: "iphone-16",
  name: "iPhone 16",
  description: "",
  price: 999,
  category: "smartphone" as const,
  imageUrl: "",
  inStock: true,
};

describe("useCart", () => {
  it("adds items to the cart", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addToCart(product);
    });

    expect(result.current.items).toHaveLength(1);
  });
});