"use client";

import { useRouter } from "next/navigation";

import { useAuthContext } from "../../features/auth/auth-context";
import { useCartContext } from "../../features/cart/cart-context";
import { createOrder } from "../../features/orders/order-service";

export default function CheckoutPage() {
  const router = useRouter();

  const { user } = useAuthContext();
  const { items, total, clearCart } = useCartContext();

  if (!user) {
    return (
      <main className="p-8">
        <h1>Login required</h1>
      </main>
    );
  }

  const handleCheckout = () => {
    createOrder(user.email, items);

    clearCart();

    router.push("/checkout/success");
  };

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">
        Checkout
      </h1>

      <p>Total: ${total}</p>

      <button
        onClick={handleCheckout}
        className="bg-black text-white px-4 py-2"
      >
        Place Order
      </button>
    </main>
  );
}