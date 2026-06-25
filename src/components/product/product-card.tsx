import { Product } from "../../types/product";
import { AddToCartButton } from "./add-to-cart-button";
import { useCartContext } from "../../features/cart/cart-context";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCartContext();

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

      <div className="mt-4">
        <AddToCartButton
          product={product}
          onAddToCart={addToCart}
        />
      </div>
    </article>
  );
}