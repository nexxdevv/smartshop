import { CartItem } from "../../features/cart/cart-types";

export interface Order {
  id: string;
  email: string;
  items: CartItem[];
  total: number;
  createdAt: number;
}