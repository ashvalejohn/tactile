import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item_id: null,
      size: '',
      quantity: 1,
      animatePanel: 'slide-in-left',
      animateOverlay: 'overlay-slide-in-left'
    };

    this.props.fetchItem(this.props.match.params.id);
    this.addToCart = this.addToCart.bind(this);
    this.clickAway = this.clickAway.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location !== nextProps.location) {
      this.props.fetchItem(nextProps.match.params.id);
    }
  }

  componentWillUnmount() {
    this.props.clearItem();
    this.props.clearErrors();
  }

  clickAway() {
    this.setState({
      animatePanel: "slide-out-left",
      animateOverlay: "overlay-slide-out-left"
    });

    setTimeout(() => this.props.history.push('/'), 450);
  }

  handleChange(e) {
    if (this.props.currentUser) {
      this.setState({
        size: e.target.value,
      });
      this.props.clearErrors();
    }
  }

  addToCart(e) {
    e.preventDefault;
    this.setState({
      item_id: this.props.item.id,
    }, () => {
      this.props.addItemToCart(this.state).then(() => this.props.history.push('/cart'));
    });
  }

  render() {
    if (this.props.item === null || Object.keys(this.props.item).length === 0) {
      return (
        <h1 />
      );
    }

    const item = this.props.item;

    return (
      <div className={`item-detail-panel ${this.state.animatePanel}`}>
        <div className="item-detail-info">
          <h1 className="item-title">{item.description}</h1>
          <div className="item-img-container">
            <img className="item-img" src={item.item_image_url} alt="" />
          </div>
          <form className={this.props.currentUser ? "item-sizes" : "item-sizes deactivated"}>
            {
              item.sizes.map(size => (
                <label key={`${item.id}${size}`}>
                  <input checked={this.state.size === size} onChange={this.handleChange} type="radio" value={size} name="item-size" />
                  <span className="size-text">{size}</span>
                </label>
              ))
            }
          </form>
          <h2 className="item-price">{item.price}</h2>
          <ul className="errors">
            {this.props.errors ? this.props.errors.map((error, idx) =>
              (<li key={idx}>{error}</li>))
              :
              (null)
            }
          </ul>
          {
            this.props.currentUser ?
              <button className="add-to-cart" onClick={this.addToCart}>Add to Cart</button>
              :
              <div className="log-in-add-to-cart">
                <p>You must be logged in to add items to your cart.</p>
                <Link to="/login">
                  <button className="add-to-cart">Login</button>
                </Link>
              </div>
            }
        </div>
        <div className={`item-detail-overlay ${this.state.animateOverlay}`} onClick={this.clickAway} />
      </div>
    );
  }
}

export default ItemDetail;
