class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.date :arrival_date, null: false
      t.date :depart_date, null: false
      t.integer :num_travellers, null: false
      t.integer :traveller_id, null: false
      t.integer :room_id, null: false
      t.timestamps
    end
    add_index :bookings, :traveller_id
    add_index :bookings, :room_id
  end
end
