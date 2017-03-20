json.extract! @room, :id, :title, :description, :address, :avail_start,
  :avail_end, :image_url, :city, :lat, :lng

json.host_first_name @room.host.first_name
json.host_last_name @room.host.last_name
