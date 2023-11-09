import React, { useMemo, useState } from 'react';
import { CartItem } from '../types';
import './Cart.css';

interface CartProps {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
}

const Cart: React.FC<CartProps> = ({ cart, setCart }) => {
  const [updatedCart, setUpdatedCart] = useState<CartItem[]>(cart);
  console.log('Cart component received cart:', cart, updatedCart);

  const updateQuantity = (id: number, quantity: number) => {
    const updatedItems = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setUpdatedCart(updatedItems);
    setCart(updatedItems); // Update the main cart state as well
  };

  const totalAmount = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.unitPrice * item.quantity,
      0
    );
  }, [cart, updatedCart]);


  // const totalAmount = updatedCart.reduce(
  //   (total, item) => total + item.unitPrice * item.quantity,
  //   0
  // );

  return (
    <div className="cart">
      <h1>My Cart</h1>
      <div className="cart-items">
        {cart.map((item, index) => (
          <div  key={`${item.id}-${index}`} className="cart-item">
            <div className="cart-item-details">
              <img src={item.image} alt={item.productName} />
              <h3>{item.productName}</h3>
            </div>
            <div className="cart-item-quantity">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
              />
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
          </div>
        ))}
      </div>
      <p className="cart-total">
        Total: ₱{totalAmount.toFixed(2)}
      </p>
    </div>
  );
};

export default Cart;
