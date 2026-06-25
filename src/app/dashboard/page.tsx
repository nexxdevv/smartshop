"use client";

import Link from "next/link";
import { useAuthContext } from "../../features/auth/auth-context";
import { getOrders } from "../../features/orders/order-service";

export default function DashboardPage() {
  const { user } = useAuthContext();

  if (!user) {
    return (
      <main className="p-8">
        <h1>Please log in</h1>
        <Link href="/login">Log in</Link>
      </main>
    );
  }

  const orders = getOrders(user.email);

  if (orders.length === 0) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">
          Orders
        </h1>

        <p>No orders yet</p>
      </main>
    );
  }

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">
        Orders
      </h1>

      {orders.map((order) => (
        <div
          key={order.id}
          className="border p-4 rounded"
        >
          <p className="font-semibold">
            Order #{order.id.slice(0, 6)}
          </p>

          <p>Total: ${order.total}</p>

          <p>
            Items: {order.items.length}
          </p>

          <p>
            Date:{" "}
            {new Date(order.createdAt).toLocaleString()}
          </p>

          <div className="mt-2">
            {order.items.map((item) => (
              <p key={item.product.id}>
                {item.product.name} × {item.quantity}
              </p>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}