import React, { Component } from 'react';

class ItemDetail extends Component {
  componentDidMount() {
    this.props.fetchItem(this.props.match.params.id);
  }

  render() {
    const item = this.props.item;
    return (
      <div className="item-detail">
        <h1 className="item-title">{item.description}</h1>
        <img className="item-img" src={item.item_image_url} alt="" />
        <h2 className="item-price">${item.price}</h2>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    );
  }
}

export default ItemDetail;
