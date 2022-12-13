json.posts do

    @posts.each_with_index do |post, idx|
        json.set! idx do
            json.partial! 'api/posts/post', post: post
        end
    end
    # @posts.each do |batch|
    #     debugger
    #     if !batch.include?(nil)
    #         batch.each do |post|
    #             if post
    #                 json.set! post.id do
    #                     json.partial! 'api/posts/post', post: post
    #                 end
    #             end
    #         end
    #     else
    #         batch = batch.reject { |post| !post }
    #         batch.each do |post|
    #             if post
    #                 json.set! post.id do
    #                     json.partial! 'api/posts/post', post: post
    #                 end
    #             end
    #         end
    #     end
    # end
end