import type { Metadata } from "next";
import "./globals.css";

import {
  CartProvider,
} from "../features/cart/cart-context";
import { Navbar } from "../components/layout/navbar";

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
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}