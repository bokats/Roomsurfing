host = @room.host

json.extract! @room, :id, :title, :description, :address, :avail_start,
  :avail_end, :image_url, :city, :lat, :lng, :booked

json.host_first_name host.first_name
json.host_last_name host.last_name

json.reviews do
  @room.reviews.each do |review|
    author = review.author
    json.set! review.id do
      json.extract! review, :id, :rating, :comment, :room_id, :author_id
      json.author_first_name author.first_name
      json.author_last_name author.last_name
      json.author_city author.home_city
    end
  end
end
