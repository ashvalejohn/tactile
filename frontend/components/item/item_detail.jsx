import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemDetail extends Component {
  componentDidMount() {
    this.props.fetchItem(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location !== nextProps.location) {
      this.props.fetchItem(nextProps.match.params.id);
    }
  }


  render() {
    const item = this.props.item;
    return (
      <div className="item-detail">
        <h1 className="item-title">{item.description}</h1>
        <img className="item-img" src={item.item_image_url} alt="" />
        <h2 className="item-price">${item.price}</h2>
        <Link to="/cart">
          <button className="add-to-cart">Add to Cart</button>
        </Link>
      </div>
    );
  }
}

export default ItemDetail;
