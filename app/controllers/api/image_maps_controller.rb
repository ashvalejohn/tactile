class Api::ImageMapsController < ApplicationController
  def index
    @image_map = ImageMap.find_by(image_id: :image_map_params[:image_id])
  end

  private
  def image_map_params
    params.require(:image_map).permit(:image_id, :item_id)
  end
end
