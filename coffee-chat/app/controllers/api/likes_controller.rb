class Api::LikesController < ApplicationController
    wrap_parameters include: Like.attribute_names + ["user_id", "emote_id", "likable_id", "likable_type"]

    def index
        ordered_top_likes = Hash.new(0)
        @likes = Like.where(likable_id: like_params[:likable_id], likable_type: like_params[:likable_type])
        @likes.each do |like|
            ordered_top_likes[like.emote_id] += 1
        end
        @top_three = (ordered_top_likes.sort_by { |emote_id, count| -count }.to_h).keys[0..2]

        if @likes
            render :index
        else
            render json: { errors: ['something went wrong :(']}, status: 422
        end
    end

    def show
        @like = Like.find_by(likable_id: like_params[:likable_id], likable_type: like_params[:likable_type], user_id: like_params[:user_id])
        if @like
            render :show
        else
            render json: { errors: ['something went wrong :(']}, status: 422
        end
    end

    def create
        @like = Like.create!(like_params)
        if @like
            render :show
        else
            render json: { errors: ['something went wrong :(']}, status: 422
        end
    end

    def destroy
        @like = Like.where(user_id: like_params[:user_id], likable_id: like_params[:likable_id], likable_type: like_params[:likable_type]).first
        if @like
            if @like.delete
                render :show
            else
                render json: { errors: ['something went wrong :(']}, status: 422
            end
        else
            render json: { errors: ['something went wrong :(']}, status: 422
        end
    end

    def update
        @like = Like.find_by(id: params[:id])
        if @like
            if @like.update!(like_params)
                render :show
            else
                render json: { errors: ['something went wrong :(']}, status: 422
            end
        else
            render json: { errors: ['something went wrong :(']}, status: 422
        end
    end

    private
    def like_params
        params.require(:like).permit(:user_id, :emote_id, :likable_id, :likable_type)
    end
end
