// src/features/cart/cart-types.ts

import { Product } from "../../types/product";

export interface CartItem {
  product: Product;
  quantity: number;
}