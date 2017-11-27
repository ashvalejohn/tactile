import React from 'react';

const ItemDetail = ({ item }) => (
  <div className="item-detail">
    <h1>{item.description}</h1>
    <img src={item.item_image_url} alt="" />
    <h2>${item.price}</h2>
    <button>Add to Cart</button>
  </div>
)

export default ItemDetail;