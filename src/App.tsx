import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';
import { CartItem } from './types';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  return (
    <div className="app">
      <ProductList cart={cart} setCart={setCart} />
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
};

export default App;
