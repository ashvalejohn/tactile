class Api::CartItemsController < ApplicationController
  def create
    @cart_item = CartItem.new(cart_item_params)
    if @cart_item.save
      render :index
    else
      render @cart_item.errors.full_messages, status: 401
    end
  end

  def index
    @cart_items  = CartItem.where(user_id: current_user.id)
    if @cart_items
      @item_info = @cart_items.each {|item| item.item }
      render :index
    else
      render json: ["You don't have anything in your cart."]
    end
  end

  private
  def cart_item_params
    params.require(:cart_item).permit(:item_id, :user_id, :size, :quantity)
  end

end
