import React, { Component } from 'react';
import CartIndexItem from './cart_index_item';

class CartIndex extends Component {
  constructor(props) {
    super(props);
    this.props.fetchCartItems();
    this.clickAway = this.clickAway.bind(this);
    this.renderCartItems = this.renderCartItems.bind(this);
  }

  clickAway() {
    this.props.history.push('/');
  }

  renderCartItems() {
    if (this.props.cartItems.length === 0) {
      return (
        <div className="cart-item no-items">
          <h1 className="cart-item-title">You don’t have any items in your cart.</h1>
          <p>⟵ Add some by clicking a product in a photo.</p>
        </div>
      );
    }

    return (
      this.props.cartItems.map(item => (
        <CartIndexItem key={item.id} item={item} remove={this.props.removeItemFromCart} cartItemId={item.id} />
      ))
    );
  }

  render() {
    return (
      <div className="cart-panel">
        <div className="cart">
          <h1 className="cart-title">Cart</h1>
          <div className="cart-items">
            {this.renderCartItems()}
          </div>
          <button className="checkout">Checkout</button>
        </div>
        <div className="cart-overlay" onClick={this.clickAway}></div>
      </div>
    );
  }
}

export default CartIndex;
