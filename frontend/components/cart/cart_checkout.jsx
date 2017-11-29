import React, { Component } from 'react';
import Modal from 'react-modal';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
    };

    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal() {
    this.props.history.push("/cart");
  }

  render() {
    return (
      <Modal isOpen={this.state.showModal} className="modal checkout-modal" overlayClassName="overlay" onRequestClose={this.handleCloseModal} ariaHideApp={this.state.showModal}>
        <h1>Hire Me!</h1>
        <div className="ashley-info">
          <img src="http://res.cloudinary.com/ashvalejohn/image/upload/v1511982562/LinkedIn_rz29kh.jpg" alt="Ashley Johnson is a software developer for hire" />
          <div className="ashley-info-links">
            <a href="linkedin.com/ashvalejohn">Linked In</a>
            <a href="github.com/ashvalejohn">Github</a>
          </div>
        </div>
      </Modal>
    );
  }
}

export default Checkout;
