class Api::CommentsController < ApplicationController
    wrap_parameters include: Like.attribute_names + ["user_id", "emote_id", "likable_id", "likable_type"]

    def index
        @comments = Post.find_by(id: params[:id]).comments
        if @comments
            render :index
        else
            render json: { errors: ['something went wrong :(']}, status: 422
        end
    end

    def create

    end

    def destroy

    end

    def update

    end

    def show

    end

    private
    def comment_params
        params.require(:comment).permit(:post_id, :user_id, :body, :image_url)
    end
end
