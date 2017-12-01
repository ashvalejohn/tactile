class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:email], user_params[:password])
    if @user
      login(@user)
    else
      render json: ["Invalid email or password"], status: 422
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
    else
      render json: ["No one has signed in yet"], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
