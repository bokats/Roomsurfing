@rooms.each do |room|
  json.set! room.id do
    json.extract! room, :id, :title, :address, :avail_start, :avail_end,
      :city, :image_url, :description
    json.host_first_name room.host.first_name
    json.host_last_name room.host.last_name
  end
end
