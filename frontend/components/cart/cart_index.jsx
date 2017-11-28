import React, { Component } from 'react';
import CartIndexItem from './cart_index_item';

class CartIndex extends Component {
  componentDidMount() {
    this.props.fetchCartItems();
  }

  render() {
    if (this.props.cartItems.length === 0) {
      return (
        <h1>Empty cart</h1>
      );
    }

    console.log(this.props.cartItems);

    const cartIndexItems = this.props.cartItems.map(item => (
      <CartIndexItem item={item} />
    ));
   
    return (
      <div>
        <h1>Your Cart</h1>
        {cartIndexItems}
      </div>
    );
  }
}

export default CartIndex;
