"use client";

import { useCartContext } from "../../features/cart/cart-context";

export function Navbar() {
  const { items } = useCartContext();

  const count = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className="flex items-center justify-between border-b p-4">
      <div className="text-xl font-bold">
        SmartShop
      </div>

      <div className="flex items-center gap-2">
        <span>Cart</span>

        <span className="rounded-full bg-black px-2 py-1 text-white text-sm">
          {count}
        </span>
      </div>
    </nav>
  );
}