# == Schema Information
#
# Table name: users
#
#  id            :bigint           not null, primary key
#  email         :string           not null
#  phone_number  :string           not null
#  password      :string           not null
#  session_token :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class User < ApplicationRecord
    validates :email, presence: true, uniqueness: { message: "Someone’s already using that email." }, format: { with: URI::MailTo::EMAIL_REGEXP } # bottom right motto pop-up.
end
