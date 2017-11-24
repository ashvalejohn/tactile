import React, { Component } from 'react';

class ImageIndex extends Component {
  componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    console.log(this.props.images);
    return (
      <div className="image-index">
        <img alt="" src={this.props.images.image_url} />
      </div>
    );
  }
}

export default ImageIndex;
