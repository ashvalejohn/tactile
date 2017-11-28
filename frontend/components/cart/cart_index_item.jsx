import React from 'react';
import { Link } from 'react-router-dom';

const CartIndexItem = ({ item }) => (
  <div className="cart-item">
    <Link to={`/items/${item.item_id}`} className="cart-img">
      <img src={item.image_url} alt={item.description} />
    </Link>
    <div className="cart-item-info">
      <Link to={`/items/${item.item_id}`} className="cart-item-title">{item.description}</Link>
      <p>Size: {item.size}</p>
      <p>Quantity: {item.quantity}</p>
      <p>{item.price}</p>
      <button className="remove-from-cart" onClick={() => (alert("Idk how to do that yet"))}>Remove</button>
    </div>
  </div>
);

export default CartIndexItem;
