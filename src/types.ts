export interface Product {
  id: number;
  productName: string;
  category: string;
  unitPrice: number;
  description: string;
  image: string;
}

export interface CartItem {
  id: number;
  productName: string;
  category: string;
  unitPrice: number;
  description: string;
  quantity: number;
  image: string; // Add the image property
}