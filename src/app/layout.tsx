import type { Metadata } from "next";
import "./globals.css";

import {
  CartProvider,
} from "../features/cart/cart-context";

export const metadata: Metadata = {
  title: "SmartShop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}