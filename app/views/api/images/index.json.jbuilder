@images.each do |image|
  json.extract! image, :image_url
end