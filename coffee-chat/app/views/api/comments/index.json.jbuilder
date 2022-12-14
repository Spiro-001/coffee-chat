@comments.each_with_index do |comment, idx|
    json.set! idx do
        json.partial! 'api/comments/comment', comment: comment
    end
end