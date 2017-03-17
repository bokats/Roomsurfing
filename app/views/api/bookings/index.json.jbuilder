@bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking, :id, :arrival_date, :depart_date, :num_travellers
    json.title booking.room.title
    json.city booking.room.city
  end
end
