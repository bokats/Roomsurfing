@rooms.each do |room|
  json.set! room.id do
    json.extract! room, :id, :title, :address, :avail_start, :avail_end,
      :city
  end
end 
