import React, { Component } from 'react';
import ImageIndexItem from './image_index_item';

class ImageIndex extends Component {
  componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    if (this.props.images.length === 0) {
      return (
        <div className="search-results">
          <p>Your search didn’t return any results.</p>
          <button onClick={this.props.fetchImages}>Back To All Images</button>
        </div>
      );
    }

    let youSearched;
    if (this.props.images[0].term !== null) {
      youSearched = (
        <div className="search-results">
          <p>You searched for “{this.props.images[0].term}.”</p>
          <button onClick={this.props.fetchImages}>Back To All Images</button>
        </div>
      );
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
