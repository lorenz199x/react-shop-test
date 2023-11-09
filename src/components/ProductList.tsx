import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import { Product, CartItem } from '../types';
import './ProductList.css'
import { mock } from '../data/mockData';

interface ProductListProps {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
}

// const mock = [
//   {
//     "id": 1,
//     "productName": "Product 1",
//     "category": "Electronics",
//     "unitPrice": 20.00,
//     "description": "Description for Product 1",
//     "image": "https://via.placeholder.com/150"
//   },
//   {
//     "id": 2,
//     "productName": "Product 2",
//     "category": "Clothing",
//     "unitPrice": 10.00,
//     "description": "Description for Product 2",
//     "image": "https://via.placeholder.com/150"
//   }
// ];

const ProductList: React.FC<ProductListProps> = ({ cart, setCart }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // Load products from the mock data
    setProducts(mock);
  }, []);

  // const addToCart = (product: Product) => {
  //   setCart([...cart, { ...product, quantity: 1 }]);
  //   console.log('Product added to cart');
  // };

  const addToCart = (product: Product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    console.log('Product added to cart');
    if (existingProductIndex !== -1) {
      // If the product already exists, update its quantity
      const updatedCart = cart.slice();
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // If the product doesn't exist, add it to the cart with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {products
        .filter((product) =>
          product.productName.toLowerCase().includes(searchText.toLowerCase())
        )
        .map((product) => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
    </div>
  );
};

export default ProductList;
