import { Order } from "./order-types";
import { CartItem } from "../../features/cart/cart-types";
import { getTotal } from "../../features/cart/cart-service";

let orders: Order[] = [];

export function createOrder(
  email: string,
  items: CartItem[]
): Order {
  const order: Order = {
    id: crypto.randomUUID(),
    email,
    items,
    total: getTotal(items),
    createdAt: Date.now(),
  };

  orders.push(order);

  return order;
}

export function getOrders(email: string): Order[] {
  return orders.filter(
    (order) => order.email === email
  );
}

export function clearOrders() {
  orders = [];
}