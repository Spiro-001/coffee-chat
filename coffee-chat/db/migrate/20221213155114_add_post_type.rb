class AddPostType < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :post_type, :string, null: false
  end
end
