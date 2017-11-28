class Api::CartItemsController < ApplicationController
  def index
    @cart_items  = CartItem.where(user_id: current_user.id)
    if @cart_items
      @item_info = @cart_items.each {|item| item.item }
      render :index
    else
      render json: ["You don't have anything in your cart."]
    end
  end
end
