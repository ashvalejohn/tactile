import React, { Component } from 'react';

class ImageIndex extends Component {
  componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    return (
      <div>
        <img alt="" src={this.props.images.image_url} />
      </div>
    );
  }
}

export default ImageIndex;
