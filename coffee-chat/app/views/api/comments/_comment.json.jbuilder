json.extract! comment, :id, :post_id, :user_id, :body, :image_url, :created_at
json.author comment.user
comment.likes.each do |like|
    json.set! :likes do
        json.set! like.id do
            json.extract! like, :likable_id, :likable_type, :emote_id, :user_id
        end
    end
end