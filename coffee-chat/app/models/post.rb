# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  body       :text
#  image_url  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  post_type  :string           not null
#
class Post < ApplicationRecord
    POST_TYPES = ["pwpac", "pwpnc", "pwopwc"]
    validates_with OnePresentValidator

    has_many :likes, as: :likable, dependent: :destroy
    has_many :comments, dependent: :destroy
    belongs_to :user

    validates :body, length: { maximum: 3000, message: 'body exceeds over 3000 characters'}
    validates :post_type, inclusion: { in: POST_TYPES }
end
