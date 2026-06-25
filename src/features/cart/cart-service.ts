// src/features/cart/cart-service.ts

import { Product } from "../../types/product";
import { CartItem } from "./cart-types";

export function addItem(
  cart: CartItem[],
  product: Product
): CartItem[] {
  const existingItem = cart.find(
    (item) => item.product.id === product.id
  );

  if (!existingItem) {
    return [
      ...cart,
      {
        product,
        quantity: 1,
      },
    ];
  }

  return cart.map((item) =>
    item.product.id === product.id
      ? {
          ...item,
          quantity: item.quantity + 1,
        }
      : item
  );
}

export function removeItem(
  cart: CartItem[],
  productId: string
): CartItem[] {
  return cart.filter(
    (item) => item.product.id !== productId
  );
}

export function updateQuantity(
  cart: CartItem[],
  productId: string,
  quantity: number
): CartItem[] {
  return cart.map((item) =>
    item.product.id === productId
      ? {
          ...item,
          quantity,
        }
      : item
  );
}

export function getTotal(
  cart: CartItem[]
): number {
  return cart.reduce(
    (total, item) =>
      total + item.product.price * item.quantity,
    0
  );
}