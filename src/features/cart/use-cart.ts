// src/features/cart/use-cart.ts

"use client";

import { useMemo, useState } from "react";

import {
  addItem,
  removeItem,
  updateQuantity,
  getTotal,
} from "./cart-service";

import { CartItem } from "./cart-types";
import { Product } from "../../types/product";

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setItems((current) =>
      addItem(current, product)
    );
  };

  const removeFromCart = (
    productId: string
  ) => {
    setItems((current) =>
      removeItem(current, productId)
    );
  };

  const changeQuantity = (
    productId: string,
    quantity: number
  ) => {
    setItems((current) =>
      updateQuantity(
        current,
        productId,
        quantity
      )
    );
  };

  const clearCart = () => setItems([]);

  const total = useMemo(
    () => getTotal(items),
    [items]
  );

  return {
    items,
    total,
    addToCart,
    removeFromCart,
    changeQuantity,
    clearCart,
  };
}