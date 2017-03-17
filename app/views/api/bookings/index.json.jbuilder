@bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking, :id, :arrival_date, :depart_date, :num_travellers
    json.title booking.room.title
    json.city booking.room.city
    json.host_first_name booking.room.host.first_name
    json.host_last_name booking.room.host.last_name
  end
end
