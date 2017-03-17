class AddBookedDefaultToRooms < ActiveRecord::Migration[5.0]
  def change
    remove_column :rooms, :booked
    add_column :rooms, :booked, :boolean, default: false
  end
end
