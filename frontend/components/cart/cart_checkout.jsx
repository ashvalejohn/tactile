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
        <h1 className="checkout-title">Thank you for visiting <span>Tactile</span></h1>
        <div className="ashley-info">
          <a className="ashley-img-container" target="_blank" rel="noreferrer noopener" href="http://www.linkedin.com/in/ashvalejohn">
            <img className="ashley-img" src="http://res.cloudinary.com/ashvalejohn/image/upload/v1511982562/LinkedIn_rz29kh.jpg" alt="Ashley Johnson is a software developer for hire" />
          </a>
          <div className="ashley-info-links">
            <p>Tactile was built by <a target="_blank" rel="noreferrer noopener" alt="Ashley Johnson's LinkedIn profile" href="https://www.linkedin.com/in/ashvalejohn">Ashley Johnson</a>.
            </p>
            <p>Read more about this project <a target="_blank" rel="noreferrer noopener" alt="Tactile Github" href="https://github.com/ashvalejohn/tactile">here</a>.
            </p>
            <p>See other projects built by Ashley <a target="_blank" rel="noreferrer noopener" alt="Tactile Github" href="https://github.com/ashvalejohn">here</a>.
            </p>
          </div>
        </div>
      </Modal>
    );
  }
}

export default Checkout;
