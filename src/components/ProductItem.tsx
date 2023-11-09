import React from 'react';
import { Product } from '../types';
import './ProductItem.css';

interface ProductItemProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, addToCart }) => {

  const handleAddToCart = () => {
    addToCart(product);
    console.log('Add to Cart button clicked'); // Add this line
  };


  return (
    <div className="product-item">
      <img src={product.image} alt={product.productName} />
      <div className="product-details"> {/* Add the product-details class here */}
        <h3>{product.productName}</h3>
        <p>{product.description}</p>
        <p>Category: {product.category}</p>
        <p>Price: ₱{product.unitPrice}</p>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
