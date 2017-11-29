import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartIndexItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editSize: false,
      editQuantity: false,
    };
  }

  // openUpdate(stateSlice) {
  //   switch (stateSlice) {
  //     case "size":
  //       this.setState({

  //       })
  //   }
  //   this.setState({
  //     ${stateSlice} : true,
  //   }, () => {
  //     console.log(this.state);
  //   });
  // }


  render() {
    return (
      <div className="cart-item">
        <Link to={`/items/${this.props.item.item_id}`} className="cart-img">
          <img src={this.props.item.image_url} alt={this.props.item.description} />
        </Link>
        <div className="cart-item-info">
          <Link to={`/items/${this.props.item.item_id}`} className="cart-item-title">{this.props.item.description}</Link>
          <p>{this.props.item.price}</p>
          <div className="cart-fields">
            <label className="cart-field-name">Size:
              <select>
                {
                  this.props.item.sizes.map(size => 
                    size === this.props.item.size ? <option selected>{size}</option> : <option>{size}</option>
                  )
                }
                </select>
            </label>
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
