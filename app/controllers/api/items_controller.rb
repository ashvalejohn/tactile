class Api::ItemsController < ApplicationController
  def show
    @item = Item.find(params[:id])
    render :show
  end

  def search
    items = Item.search(search_params[:term])
    image_maps = items.map { |item| item.image_maps }
    @images = image_maps.flatten.map { |img_map| img_map.image }.uniq
    @images
    render 'api/images/index'
  end

  private
  def item_params
    params.require(:item).permit(:item_image_url, :description, :price, :sizes)
  end

  def search_params
    params.require(:search).permit(:term)
  end
end
