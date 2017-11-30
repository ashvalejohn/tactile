json.array! @cart_items do |item| 
  json.id item.id
  json.size item.size
  json.item_id item.item.id
  json.description item.item.description
  json.price number_to_currency(item.item.price)
  json.image_url item.item.item_image_url
  json.sizes item.item.sizes
  # json.quantity CartItem.all.group(:user_id).group(:item_id).group(:size).count (+ unique)
end

