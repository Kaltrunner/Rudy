class SessionsController < ApplicationController
    skip_before_action :authorize, only:[:destroy]

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id]= user.id
            render json: user
        else
            render json: {error: "Invalid username and/or password"}, status: :unauthorized
        end
    end

    def destroy
        # session.delete(:user_id)
        # head :no_content
        session.clear
    end

end
