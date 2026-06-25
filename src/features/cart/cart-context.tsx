// src/features/cart/cart-context.tsx

"use client";

import {
  createContext,
  useContext,
} from "react";

import { useCart } from "./use-cart";

const CartContext = createContext<
  ReturnType<typeof useCart> | undefined
>(undefined);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const cart = useCart();

  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context =
    useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCartContext must be used within CartProvider"
    );
  }

  return context;
}