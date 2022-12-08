class AddingUserAttributes < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :first_name, :string, null: false, length: {minimum:3, maximum:20}
    add_column :users, :last_name, :string, null: false, length: {minimum:3, maximum:20}
    add_column :users, :country, :string, null: false
  end
end
