class Api::CartItemsController < ApplicationController
  def create
    @cart_item = CartItem.new(cart_item_params)
    @cart_item.user_id = current_user.id
    if @cart_item.save
      render :index
    else 
      render json: @cart_item.errors.full_messages, status: 401
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

  def update
    @cart_item = CartItem.find(params[:id])
    if @cart_item && @cart_item.update_attributes(cart_item_params)
      render :index
    elsif !@cart_item
      render json: ["That item is not in your cart."], status: 404
    else
      render @cart_item.errors.full_messages, status: 401
    end
    
  end

  def destroy
    @cart_item = CartItem.find(params[:id])
    if @cart_item
      @cart_item.destroy
    else
      render json: ["Can't delete an item that doesn't exist."], status: 404
    end
  end

  private
  def cart_item_params
    params.require(:cartItem).permit(:item_id, :size, :quantity)
  end

end
