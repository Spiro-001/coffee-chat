class Api::CommentsController < ApplicationController
    wrap_parameters include: Like.attribute_names + ["user_id", "post_id", "body", "image_url"]

    def index
        @comments = Post.find_by(id: params[:id]).comments.order(created_at: :desc)
        if @comments
            render :index
        else
            render json: { errors: ['something went wrong :(']}, status: 422
        end
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: { errors: ['something went wrong :(']}, status: 422
        end
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
