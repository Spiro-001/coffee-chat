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
#
class Post < ApplicationRecord
    validates_with OnePresentValidator

    belongs_to :user

    validates :body, length: { maximum: 3000, message: 'body exceeds over 3000 characters'}
    
end
