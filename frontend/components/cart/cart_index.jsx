import React, { Component } from 'react';
import CartIndexItem from './cart_index_item';

class CartIndex extends Component {
  constructor(props) {
    super(props);
    this.props.fetchCartItems();
    this.clickAway = this.clickAway.bind(this);
  }

  clickAway() {
    this.props.history.push('/');
  }

  render() {
    if (this.props.cartItems.length === 0) {
      return (
        <h1>Empty cart</h1>
      );
    }

    console.log(this.props.cartItems);

    const cartIndexItems = this.props.cartItems.map(item => (
      <CartIndexItem key={item.id} item={item} />
    ));
   
    return (
      <div className="cart">
        <div className="cart-info">
          <h1>Cart</h1>
          {cartIndexItems}
        </div>
        <div className="cart-overlay" onClick={this.clickAway}></div>
      </div>
    );
  }
}

export default CartIndex;
