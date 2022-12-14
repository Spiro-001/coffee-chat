@likes.each do |like|
    json.set! like.id do
        json.partial! 'api/likes/like', like: like
    end
end
json.top_emotes @top_three
