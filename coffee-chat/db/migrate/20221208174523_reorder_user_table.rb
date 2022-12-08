class ReorderUserTable < ActiveRecord::Migration[7.0]
  def change
    drop_table :users
    create_table :users do |t|
      t.string "email", unique: true, null: false, index: true
      t.string "phone_number", unique: true, null: false, index: true
      t.string "first_name", null: false, length: {minimum:3, maximum:20}
      t.string "last_name", null: false, length: {minimum:3, maximum:20}
      t.string "country", null: false
      t.string "password_digest", null: false
      t.string "session_token", null: false, index: true
      t.timestamps
    end
  end
end

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