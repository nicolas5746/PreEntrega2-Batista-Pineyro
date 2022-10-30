import React from 'react';
import { CartContext } from 'contexts/cart/CartContext';
import './Cart.sass';

const Cart = () => {
  return (
    <div className="cart">
      <CartContext.Provider></CartContext.Provider>
    </div>
  );
}

export default Cart;