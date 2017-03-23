json.extract! @room, :id, :title, :description, :address, :avail_start,
  :avail_end, :image_url, :city, :lat, :lng, :booked

json.host_first_name @room.host.first_name
json.host_last_name @room.host.last_name

json.reviews do
  @room.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :rating, :comment, :room_id
    end
  end
end
