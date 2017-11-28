json.array! @cart_items do |item| 
  json.id item.id
  json.size item.size
  json.quantity item.quantity

  json.item_id item.item.id
  json.item_description item.item.description
  json.item_price number_to_currency(item.item.price)
  json.item_image_url item.item.item_image_url
end