json.extract! @item, :id, :item_image_url, :description, :sizes
json.price number_to_currency(@item.price)