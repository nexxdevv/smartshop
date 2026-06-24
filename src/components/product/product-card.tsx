// src/components/product/product-card.tsx

import { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="rounded-lg border p-4">
      <h2 className="text-xl font-semibold">
        {product.name}
      </h2>

      <p>${product.price}</p>

      <p>{product.category}</p>

      <p>
        {product.inStock
          ? "In Stock"
          : "Out of Stock"}
      </p>
    </article>
  );
}