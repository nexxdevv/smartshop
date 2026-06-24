// src/types/product.ts

export type ProductCategory = "smartphone" | "tablet";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  imageUrl: string;
  inStock: boolean;
}