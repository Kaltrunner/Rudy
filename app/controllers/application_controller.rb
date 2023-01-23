class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize

  def authorize
    @current_user = User.find_by!(id: session[:user_id])
    if @current_user 
      render json: @current_user
    else render json: {error: "unauthorized" }, status: :unauthorized
    end
  end

end
