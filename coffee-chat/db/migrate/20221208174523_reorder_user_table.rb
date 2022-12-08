class ReorderUserTable < ActiveRecord::Migration[7.0]
  def down
    drop_table :users
  end

  def up
    create_table :users do |t|
      t.string :test
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