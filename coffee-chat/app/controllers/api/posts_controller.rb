class Api::PostsController < ApplicationController
    wrap_parameters include: Post.attribute_names + ['batch_size', "start", "finish"]
    def index
        @posts = Post.order("created_at DESC").limit(post_params[:batch_size]).offset(post_params[:start])
        # Post.find(:order => "created_on DESC", :limit => '#{post_params[:batch_size]}', :offset => '#{post_params[:start]}') # MAKE SURE TO CHANGE THIS AND NOT HARDCODE STUFF , finish: post_params[:finish]
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
        @post = Post.find_by(id: params[:id])
        if @post
            @post.destroy
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
