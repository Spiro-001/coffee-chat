json.extract! post, :id, :user_id, :body, :image_url, :post_type, :created_at
# post.likes.each do |like|
#     json.extract! like, :likable_id, :likable_type, :emote_id
# end
post.likes.each do |like|
    json.set! :likes do
        json.set! like.id do
            json.extract! like, :likable_id, :likable_type, :emote_id, :user_id
        end
    end
end
