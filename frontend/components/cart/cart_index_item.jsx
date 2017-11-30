import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartIndexItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: undefined,
      item_id: undefined,
      image_url: '',
      description: '',
      sizes: [],
      size: '',
      price: '',
      quantity: 1,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const item = this.props.item;
    this.setState({
      id: `${item.id}`,
      item_id: `${item.item_id}`,
      image_url: `${item.image_url}`,
      description: `${item.description}`,
      sizes: item.sizes,
      size: `${item.size}`,
      price: `${item.price}`,
    });
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      size: e.target.value,
    }, () => (this.props.update(this.state)));
  }

  render() {
    return (
      <div className="cart-item">
        <Link to={`/items/${this.state.item_id}`} className="cart-img">
          <img src={this.state.image_url} alt={this.state.description} />
        </Link>
        <div className="cart-item-info">
          <Link to={`/items/${this.state.item_id}`} className="cart-item-title">{this.state.description}</Link>
          <p>{this.state.price}</p>
          <div className="cart-fields">
            <label className="cart-field-name" htmlFor="#cart-sizes">Size:</label>
            <select className="cart-sizes" id="cart-sizes" defaultValue={this.state.size} onChange={this.handleChange}>
              {
                this.state.sizes.map(sizeOption => (
                  <option key={sizeOption} value={sizeOption}>{sizeOption}</option>
                ))
              }
            </select>
            
          </div>
          {/* <div className="cart-fields">
            <p><span className="cart-field-name">Quantity:</span> {this.props.item.quantity}</p>
            <button className="cart-update">Update</button>
          </div> */}
  
          <button className="cart-remove" onClick={() => (this.props.remove(this.props.cartItemId))}>Remove</button>
        </div>
      </div>

    );
  }
  
};

export default CartIndexItem;
