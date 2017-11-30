json.array! @images do |image|
  json.id image.id
  json.image_url image.image_url
  json.image_maps image.image_maps
end