import React, { Component } from 'react';
import ImageIndexItem from './image_index_item';

class ImageIndex extends Component {
  componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    if (this.props.images.length === 0) {
      return (
        <h1></h1>
      );
    }

    let youSearched;

    if (this.props.images[0].term !== null) {
      youSearched = <p>You searched for “{this.props.images[0].term}.”</p>;
    }

    const imageIndexItems = this.props.images.map(image => (
      <ImageIndexItem key={image.id} image={image} history={this.props.history} />
    ));

    return (
      <div className="image-index">
        {youSearched}
        {imageIndexItems}
      </div>
    );
  }
}

export default ImageIndex;
