# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  post_id    :bigint           not null
#  user_id    :bigint           not null
#  body       :text             not null
#  image_url  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
    has_many :likes, as: :likable
    belongs_to :user
    belongs_to :post

    validates :body, length: { maximum: 3000, message: 'body exceeds over 3000 characters'}
end
