// src/features/products/mock-products.ts

import { Product } from "../../types/product";

export const mockProducts: Product[] = [
  {
    id: "iphone-16",
    name: "iPhone 16",
    description: "Latest Apple smartphone",
    price: 999,
    category: "smartphone",
    imageUrl: "/images/iphone16.jpg",
    inStock: true,
  },
  {
    id: "galaxy-s25",
    name: "Galaxy S25",
    description: "Latest Samsung smartphone",
    price: 899,
    category: "smartphone",
    imageUrl: "/images/galaxys25.jpg",
    inStock: true,
  },
  {
    id: "ipad-air",
    name: "iPad Air",
    description: "Apple tablet",
    price: 699,
    category: "tablet",
    imageUrl: "/images/ipadair.jpg",
    inStock: true,
  },
];