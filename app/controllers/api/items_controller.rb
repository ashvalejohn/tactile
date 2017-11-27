class Api::ItemsController < ApplicationController
  def show
    @item = Item.find(params[:id])
    render json: @item.description
  end

  private
  def item_params
    params.require(:item).permit(:item_image_url, :description, :price)
  end
end
