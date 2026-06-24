// src/app/home-products.test.tsx

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "./page";

describe("Home Page", () => {
  it("renders products", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: /iphone 16/i,
      })
    ).toBeInTheDocument();
  });
});