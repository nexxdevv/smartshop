import { describe, expect, it } from "vitest";

import { createOrder, getOrders } from "./order-service";

const cart = [
  {
    product: {
      id: "iphone-16",
      name: "iPhone 16",
      description: "",
      price: 1000,
      category: "smartphone" as const,
      imageUrl: "",
      inStock: true,
    },
    quantity: 2,
  },
];

describe("Order Service", () => {
  it("creates an order", () => {
    const order = createOrder("test@email.com", cart);

    expect(order.email).toBe("test@email.com");
    expect(order.total).toBe(2000);
  });

  it("stores and retrieves orders", () => {
    createOrder("test@email.com", cart);

    const orders = getOrders("test@email.com");

    expect(orders.length).toBe(1);
  });
});