import React, { Component } from 'react';

class ImageIndexItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log(e.target);
  }

  render() {
    const image = this.props.image;
    const image_maps = this.props.image.image_maps;

    return (
      <div className="image-index-item">
        <img alt="" src={`${image.image_url}`} useMap={`img${image.id}-map`} />
        <map name={`img${image.id}-map`}>
          {
            image_maps.map(imageMap => (
              imageMap.coords.map(coord => (
                <area 
                  key={coord} 
                  onClick={this.handleClick} 
                  shape="poly" 
                  coords={coord} 
                  alt={`Item id: ${imageMap.item_id}`}
                />
              ))
            ))
          }
        </map>
      </div>
    );
  }
}

export default ImageIndexItem;
