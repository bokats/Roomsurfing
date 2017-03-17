class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.text :comment, null: false
      t.integer :author_id, null: false
      t.integer :room_id, null: false
      t.timestamps
    end
    add_index :reviews, :author_id
    add_index :reviews, :room_id
  end
end
