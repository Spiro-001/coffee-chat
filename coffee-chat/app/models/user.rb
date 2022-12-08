# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  phone_number    :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  password_digest :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  country         :string           not null
#
class User < ApplicationRecord
    has_secure_password
    before_validation :ensure_session_token

    validates :email,
        presence: true, 
        uniqueness: { message: "Someone's already using that email." }, 
        format: { with: URI::MailTo::EMAIL_REGEXP } # bottom right motto pop-up.
    validates :phone_number, 
        phone: true, 
        uniqueness: { message: "Someone's already using that phone-number" }
    validates :password, 
        allow_nil: true, 
        length: { minimum: 6, maximum: 16 }
    validates :session_token, 
        presence: true, 
        uniqueness: true
    validates :first_name, 
        format: { with: /[a-zA-Z]/, message: "only letters allowed" }
    validates :first_name, 
        format: { with: /[a-zA-Z]/, message: "only letters allowed" }

    def self.find_by_credentials(credential, password)
        email_or_phonenumber = credential.match?(URI::MailTo::EMAIL_REGEXP) ? User.find_by(email: credential) : User.find_by(phone_number: credential)
        return nil if email_or_phonenumber.nil?
        email_or_phonenumber.authenticate(password) ? email_or_phonenumber : nil
    end

    def reset_session_token!
        self.update!(:session_token => generate_unique_session_token)
        self.session_token
    end

    private
    def generate_unique_session_token
        session_token = SecureRandom.base64
        while User.exists?(:session_token => session_token)
            session_token = SecureRandom.base64
        end
        return session_token
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end
end
