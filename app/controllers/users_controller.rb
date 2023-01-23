class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :logged]

    def create
    user = User.create!(user_params)
    if user.valid?
        session[:user_id] = user.id
        render json: user, status: :created
    # else
    #     render json: { errors.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def logged
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id]= user.id
      render json: user
  else
      render json: {error: "Invalid username and/or password"}, status: :unauthorized
  end
  end

    def show
        logged_in_user = User.find_by(id: session[:user_id])
        if logged_in_user 
          render json: logged_in_user, status: :accepted
        else
          render json: { errors: logged_in_user.errors.full_messages }, status: :unauthorized
        end
      end

    private

    def user_params
        params.permit(:username, :password)
    end

end
