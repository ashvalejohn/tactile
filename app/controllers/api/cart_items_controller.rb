class Api::CartItemsController < ApplicationController
  def index
    @cart_items  = CartItem.where(user_id: current_user.id)
    if @cart_items
      render :index
    else
      render json: ["You don't have anything in your cart."]
    end
  end
end
