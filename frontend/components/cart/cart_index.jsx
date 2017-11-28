import React, { Component } from 'react';

class CartIndex extends Component {
  componentDidMount() {
    this.props.fetchCartItems();
  }

  render() {
    return (
      <div>
        <h1>Your Cart</h1>
      </div>
    );
  }
}

export default CartIndex;
