import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartIndexItem from './cart_index_item';

class CartIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animatePanel: 'slide-in-right',
      animateOverlay: 'overlay-slide-in-right'
    }

    this.props.fetchCartItems();
    this.clickAway = this.clickAway.bind(this);
    this.renderCartItems = this.renderCartItems.bind(this);
  }

  clickAway() {
    this.setState({
      animatePanel: 'slide-out-right',
      animateOverlay: 'overlay-slide-out-right',
    });

    setTimeout(() => this.props.history.push('/'), 450);
  }

  renderCartItems() {
    if (this.props.cartItems.length === 0) {
      return (
        <div className="cart-item no-items">
          <h1 className="cart-item-title">You don’t have any items in your cart.</h1>
          <p>⟵ Add something by clicking a product in a photo.</p>
        </div>
      );
    }

    return (
      this.props.cartItems.map(item => (
        <CartIndexItem key={item.id} item={item} remove={this.props.removeCartItem} update={this.props.updateCartItem} cartItemId={item.id} />
      ))
    );
  }

  render() {
    return (
      <div className={`cart-panel ${this.state.animatePanel}`}>
        <div className="cart">
          <h1 className="cart-title">Cart</h1>
          <div className="cart-items">
            {this.renderCartItems()}
          </div>
          <Link to="/cart/checkout" ><button className="checkout">Checkout</button></Link>
        </div>
        <div className={`cart-overlay ${this.state.animateOverlay}`} onClick={this.clickAway}></div>
      </div>
    );
  }
}

export default CartIndex;
