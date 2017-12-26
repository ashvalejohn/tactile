import React, { Component } from 'react';
import imageMapResize from 'image-map-resizer';
import ImageIndexItem from './image_index_item';

class ImageIndex extends Component {
  componentDidMount() {
    this.props.fetchImages().then(() => {
      imageMapResize();
    });
  }

  render() {
    if (this.props.images.length === 0) {
      return (
        <div className="image-index">
          <div className="search-results">
            <p>Your search didn’t return any results.</p>
            <button onClick={this.props.fetchImages}>Back To All Images</button>
          </div>
        </div>
      );
    }

    let youSearched;
    if (this.props.images[0].term !== null) {
      window.scrollTo(0, 0);
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
