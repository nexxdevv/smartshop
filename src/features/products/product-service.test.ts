// src/features/products/product-service.test.ts

import { describe, expect, it } from "vitest";
import { getProducts } from "./product-service";

describe("Product Service", () => {
  it("returns products", () => {
    const products = getProducts();

    expect(products.length).toBeGreaterThan(0);
  });

  it("contains smartphones", () => {
    const products = getProducts();

    const smartphones = products.filter(
      (product) => product.category === "smartphone"
    );

    expect(smartphones.length).toBeGreaterThan(0);
  });

  it("contains tablets", () => {
    const products = getProducts();

    const tablets = products.filter(
      (product) => product.category === "tablet"
    );

    expect(tablets.length).toBeGreaterThan(0);
  });
});