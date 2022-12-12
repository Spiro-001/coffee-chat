class Api::PostsController < ApplicationController
    wrap_parameters include: Post.attribute_names + ['batch_size', "start", "finish"]
    def index
        @posts = Post.find_in_batches(batch_size: post_params[:batch_size], start: post_params[:start], finish: post_params[:finish]) # MAKE SURE TO CHANGE THIS AND NOT HARDCODE STUFF
        if @posts
            render :index
        else
            render json: { errors: ['either invalid params or no post exist, check for existing post']}
        end
    end

    def show
        @post = Post.find_by(id: params[:id])
        if @post
            render :show
        else
            render json: { errors: ['could not find post with that id']}, status: 404
        end

    end

    def create
        @post.new(post_params.reject! { |k,v| [:start, :finish, :batch_size].include?(k)})
        if @post.save
            render :show
        else
            render json: { errors: @post.errors.full_messages }, status: 422
        end
    end

    def destroy
        @post.find_by(id: post_params[:id])
        if @post
            @post.delete
        else
            render json: { errors: ['could not find post with that id'] }, status: 404
        end
    end

    def update
        @post.find_by(id: post_params[:id])
        if @post
            if @post.user_id === current_user.id
                if @post.update!(post_params)
                    render :show
                else
                    render json: { errors: ['invalid inputs'] }, status: 422
                end
            end
        end
    end

    private
    def post_params
        params.require(:post).permit(:user_id, :body, :image_url, :batch_size, :start, :finish)
    end
end
