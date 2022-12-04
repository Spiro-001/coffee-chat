class User < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :username
    add_index :users, :email
    add_index :users, :phone_number
  end
end
