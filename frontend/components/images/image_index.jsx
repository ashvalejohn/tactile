import React, { Component } from 'react';
import ImageIndexItem from './image_index_item';

class ImageIndex extends Component {
  componentDidMount() {
    this.props.fetchImages();
    console.log(this.props);
  }

  render() {
    if (this.props.images.length === 0) {
      return (
        <h1></h1>
      );
    }

    const imageIndexItems = this.props.images.map(image => (
      <ImageIndexItem key={image.id} image={image} history={this.props.history} />
    ));

    return (
      <div className="image-index">
        {imageIndexItems}
      </div>
    );
  }
}

export default ImageIndex;
