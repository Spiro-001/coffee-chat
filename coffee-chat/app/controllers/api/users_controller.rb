class Api::UsersController < ApplicationController
    wrap_parameters include: User.attribute_names + ['password']

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: { errors: @user.errors.full_messages }, status: 422
        end
    end

    def index
        @users = User.all
        render :index
    end

    def show
        user_email = User.find_by(email: params[:email_or_phone_number] + ".com")
        user_phone = User.find_by(phone_number: params[:email_or_phone_number])
        if user_email
            @user = user_email
            render :show
        elsif user_phone
            @user = user_phone
            render :show
        else
            render json: { errors: 'user could not be found'}, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :phone_number, :password)
    end
end
