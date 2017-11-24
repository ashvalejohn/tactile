import React, { Component } from 'react';

class ImageIndexItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    alert(`You clicked ${e.target.alt}!`);
  }

  render() {
    const image = this.props.image;
    return (
      <div className="image-index-item">
        <img alt="" src={`${image.image_url}`} useMap={`img${image.id}-map`} />
        <map name={`img${image.id}-map`}>
          {
            Object.keys(image.image_map).map(key => (
              image.image_map[key].map(coords => (
                <area onClick={this.handleClick} alt={key} shape="poly" coords={coords} />
              ))
            ))
          }
        </map>
      </div>
    )
  }
} 

export default ImageIndexItem;
