"use client";

import { useCartContext } from "../../features/cart/cart-context";

export default function CartPage() {
  const { items, total, removeFromCart, changeQuantity } = useCartContext();

  if (items.length === 0) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">Cart</h1>
        <p>Your cart is empty</p>
      </main>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Cart</h1>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.product.id}
            className="flex justify-between border p-4 rounded"
          >
            <div>
              <h2 className="font-semibold">{item.product.name}</h2>
              <p>${item.product.price}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  changeQuantity(item.product.id, item.quantity - 1)
                }
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() =>
                  changeQuantity(item.product.id, item.quantity + 1)
                }
              >
                +
              </button>

              <button
                onClick={() => removeFromCart(item.product.id)}
                className="text-red-500 ml-4"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-xl font-bold">Total: ${total}</div>
    </main>
  );
}
