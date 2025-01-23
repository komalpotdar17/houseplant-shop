import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementItem, decrementItem, deleteItem } from '../redux/cartSlice';

const ShoppingCartPage = () => {
  const { items, totalQuantity, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Cost: ${totalPrice}</p>
      {items.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => dispatch(incrementItem(item))}>+</button>
          <button onClick={() => dispatch(decrementItem(item))}>-</button>
          <button onClick={() => dispatch(deleteItem(item))}>Delete</button>
        </div>
      ))}
      <button onClick={() => alert('Coming Soon')}>Checkout</button>
      <button onClick={() => window.history.back()}>Continue Shopping</button>
    </div>
  );
};

export default ShoppingCartPage;
