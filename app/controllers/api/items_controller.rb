class Api::ItemsController < ApplicationController
  def show
    @item = Item.find(params[:id])
    render :show
  end

  private
  def item_params
    params.require(:item).permit(:item_image_url, :description, :price, :sizes)
  end
end
