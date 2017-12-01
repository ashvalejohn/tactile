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
        <h1>Made by Ashley Johnson</h1>
        <div className="ashley-info">
          <div className="ashley-img-container">
            <img className="ashley-img" src="http://res.cloudinary.com/ashvalejohn/image/upload/v1511982562/LinkedIn_rz29kh.jpg" alt="Ashley Johnson is a software developer for hire" />
          </div>
          <div className="ashley-info-links">
            <p>Ashley Johnson is a software engineer in San Francisco.</p>
            <div className="ashley-links">
              <a href="linkedin.com/ashvalejohn">
                <img src="http://res.cloudinary.com/ashvalejohn/image/upload/v1512149637/In-Black-128px-TM_vdgmqf.png" alt="ashvalejohn LinkedIn"/>
              </a>
              <a href="github.com/ashvalejohn">
                <img src="http://res.cloudinary.com/ashvalejohn/image/upload/v1512149637/GitHub-Mark-120px-plus_z52nkp.png" alt="ashvalejohn Github"/>
              </a>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default Checkout;
