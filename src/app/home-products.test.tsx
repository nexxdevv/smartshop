// src/app/home-products.test.tsx

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "./page";
import { CartProvider } from "../features/cart/cart-context";

describe("Home Page", () => {
  it("renders products", () => {
    render(
      <CartProvider>
        <Home />
      </CartProvider>,
    );

    expect(
      screen.getByRole("heading", {
        name: /iphone 16/i,
      }),
    ).toBeInTheDocument();
  });
});
