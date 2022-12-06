class AddPasswordDigestUser < ActiveRecord::Migration[7.0]
  def change
    add_index :users, :session_token
    change_column :users, :session_token, :string, null: false
  end
end
