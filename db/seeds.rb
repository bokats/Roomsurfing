# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Room.delete_all
Booking.delete_all

User.create!(username: "guest@gmail.com", password: "password",
  first_name: "Guest", last_name: "User", home_city: "San Francisco, CA")

Room.create(
  title: "Bedroom in a 3-bedroom downtown apartment",
  description: "A beautiful room available in downtown San Francisco.
    Perfect for short-term visitors to the Bay Area.",
  address: "770 Stockton St",
  avail_start: Date.new(2017, 6, 10),
  avail_end: Date.new(2017, 6, 18),
  image_url:
   "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1489960131/sample.jpg",
  city: "San Francisco",
  host_id: 1,
  booked: false,
  lat: 37.793058,
  lng: -122.407621)

# Room.create(
#   title: "Living room in a 2-story house in Berkeley",
#   description: "We are "
# )
