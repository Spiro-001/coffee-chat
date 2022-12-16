# == Schema Information
#
# Table name: likes
#
#  id           :bigint           not null, primary key
#  likable_type :string
#  likable_id   :bigint
#  emote_id     :integer
#  user_id      :bigint
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Like < ApplicationRecord
    belongs_to :likable, polymorphic: true, dependent: :destroy

    validates :likable_type, presence: true;
    validates :likable_id, presence: true;
    validates :emote_id, presence: true;
    validates :user_id, presence: true, uniqueness: { scope: [:likable_id, :likable_type] }
end
