class CreateRooms < ActiveRecord::Migration[5.0]
  def change
    create_table :rooms do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.text :address, null: false
      t.date :avail_start, null: false
      t.date :avail_end, null: false
      t.text :image_url, null: false
      t.string :city, null: false
      t.boolean :booked, null: false
      t.integer :host_id, null: false
      t.timestamps
    end
    add_index :rooms, :host_id
  end
end
