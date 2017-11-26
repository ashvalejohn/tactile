class Api::ImagesController < ApplicationController
  def index
    @images = Image.all.to_json({:include => :image_maps})
    render json: @images 
  end
end
