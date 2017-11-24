import React, { Component } from 'react';

class ImageIndex extends Component {
  componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    if (this.props.images.length === 0) {
      return (
        <h1>Loading</h1>
      );
    }

    const imageTags = this.props.images.map(image => (
      <img alt="" src={`${image.image_url}`} />
    ));

    return (
      <div className="image-index">
        {imageTags}
      </div>
    );
  }
}

export default ImageIndex;
