import React, { Component } from 'react';

class ImageIndex extends Component {
  componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    return (
<<<<<<< HEAD
      <div className="image-index">
=======
      <div>
>>>>>>> fb995f7f1b30d404630bfe5ae0d63c6d47fa9ab8
        <img alt="" src={this.props.images.image_url} />
      </div>
    );
  }
}

export default ImageIndex;
