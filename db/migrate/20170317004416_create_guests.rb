class CreateGuests < ActiveRecord::Migration[5.0]
  def change
    create_table :guests do |t|
      t.date :arrival_date, null: false
      t.date :depart_date, null: false
      t.text :description, null: false
      t.text :image_url, null: false
      t.integer :guest_id, null: false
      t.integer :room_id, null: false
      t.timestamps
    end
    add_index :guests, :guest_id
    add_index :guests, :room_id
  end
end
