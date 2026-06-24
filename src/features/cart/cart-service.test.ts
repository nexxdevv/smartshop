// src/features/cart/cart-service.test.ts

import { describe, expect, it } from "vitest";

import {
  addItem,
  removeItem,
  updateQuantity,
  getTotal,
} from "./cart-service";

const phone = {
  id: "iphone-16",
  name: "iPhone 16",
  description: "Latest Apple smartphone",
  price: 999,
  category: "smartphone" as const,
  imageUrl: "",
  inStock: true,
};

describe("Cart Service", () => {
  it("adds a new item", () => {
    const cart = addItem([], phone);

    expect(cart).toHaveLength(1);
    expect(cart[0].quantity).toBe(1);
  });

  it("increments quantity if item already exists", () => {
    const cart = addItem(
      [
        {
          product: phone,
          quantity: 1,
        },
      ],
      phone
    );

    expect(cart[0].quantity).toBe(2);
  });

  it("removes an item", () => {
    const cart = removeItem(
      [
        {
          product: phone,
          quantity: 1,
        },
      ],
      phone.id
    );

    expect(cart).toHaveLength(0);
  });

  it("updates quantity", () => {
    const cart = updateQuantity(
      [
        {
          product: phone,
          quantity: 1,
        },
      ],
      phone.id,
      5
    );

    expect(cart[0].quantity).toBe(5);
  });

  it("calculates total", () => {
    const total = getTotal([
      {
        product: phone,
        quantity: 2,
      },
    ]);

    expect(total).toBe(1998);
  });
});