// src/app/page.tsx

import { ProductCard } from "../components/product/product-card";
import { getProducts } from "../features/products/product-service";

export default function Home() {
  const products = getProducts();

  return (
    <main className="mx-auto max-w-6xl p-8">
      <h1 className="mb-8 text-4xl font-bold">SmartShop</h1>

      <section
        className="
          grid
          gap-4
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
