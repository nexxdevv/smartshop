// src/features/cart/use-cart.test.tsx

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
  it("adds items to cart", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addToCart(product);
    });

    expect(result.current.items).toHaveLength(1);
  });

  it("calculates total", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addToCart(product);
      result.current.addToCart(product);
    });

    expect(result.current.total).toBe(1998);
  });
});

it("removes items from cart", () => {
  const { result } = renderHook(() => useCart());

  act(() => {
    result.current.addToCart(product);
  });

  act(() => {
    result.current.removeFromCart(product.id);
  });

  expect(result.current.items).toHaveLength(0);
});

it("updates quantity", () => {
  const { result } = renderHook(() => useCart());

  act(() => {
    result.current.addToCart(product);
  });

  act(() => {
    result.current.changeQuantity(
      product.id,
      5
    );
  });

  expect(
    result.current.items[0].quantity
  ).toBe(5);
});