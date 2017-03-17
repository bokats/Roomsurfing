json.extract! @room, :title, :description, :address, :avail_start,
  :avail_end, :image_url, :city

json.host do
  json.first_name = @room.host.first_name
  json.last_name = @room.host.last_name
end
