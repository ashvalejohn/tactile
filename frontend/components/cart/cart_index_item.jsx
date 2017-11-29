import React from 'react';
import { Link } from 'react-router-dom';

const CartIndexItem = ({ item, remove, cartItemId }) => (
  <div className="cart-item">
    <Link to={`/items/${item.item_id}`} className="cart-img">
      <img src={item.image_url} alt={item.description} />
    </Link>
    <div className="cart-item-info">
      <Link to={`/items/${item.item_id}`} className="cart-item-title">{item.description}</Link>
      <p>Size: {item.size}</p>
      <p>Quantity: {item.quantity}</p>
      <p>{item.price}</p>
      <button className="remove-from-cart" onClick={() => (remove(cartItemId))}>Remove</button>
    </div>
  </div>
);

export default CartIndexItem;
