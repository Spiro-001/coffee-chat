class RemovePasswordDigestUser < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :password_digest, :password
  end
end
