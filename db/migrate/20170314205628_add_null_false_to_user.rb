class AddNullFalseToUser < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :email
    add_column :users, :email, :text, null: false
  end
end
