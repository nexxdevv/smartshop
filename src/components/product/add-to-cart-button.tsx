import { Product } from "../../types/product";

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function AddToCartButton({
  product,
  onAddToCart,
}: Props) {
  return (
    <button
      name="add-to-cart"
      onClick={() => onAddToCart(product)}
      className="rounded bg-black px-4 py-2 text-white"
    >
      Add to Cart
    </button>
  );
}