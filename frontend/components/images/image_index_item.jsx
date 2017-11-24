import React from 'react';

const ImageIndexItem = ({image}) => (
  <div>
    <img alt="" src={`${image.image_url}`} useMap={`img${image.id}-map`}/>
    <map name={`img${image.id}-map`}>
      {
        Object.keys(image.image_map).map(key => (
          image.image_map[key][0]
        ))
      }
    </map>
  </div>

);

export default ImageIndexItem;
