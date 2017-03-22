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

User.create(username: "guest@gmail.com", password: "password",
  first_name: "Guest", last_name: "User", home_city: "San Francisco, CA")

User.create(username: "sf1", password: "password", first_name: "Laura",
  last_name: "Andrews", home_city: "San Francisco, CA")

User.create(username: "sf2", password: "password", first_name: "Corey",
  last_name: "Johnson", home_city: "Berkeley, CA")

User.create(username: "sf3", password: "password", first_name: "Elijah",
  last_name: "Sterling", home_city: "San Francisco, CA")

User.create(username: "sf4", password: "password", first_name: "Lilly",
  last_name: "Jenkins", home_city: "San Francisco, CA")

User.create(username: "sf5", password: "password", first_name: "Drew",
  last_name: "Jacobs", home_city: "Tiburon, CA")

User.create(username: "ny1", password: "password", first_name: "Willie",
  last_name: "McGuinness", home_city: "New York, NY")

User.create(username: "ny2", password: "password", first_name: "Katie",
  last_name: "Hersh", home_city: "New York, NY")

User.create(username: "ny3", password: "password", first_name: "Mika",
  last_name: "Johannson", home_city: "New York, NY")

User.create(username: "ny4", password: "password", first_name: "John",
  last_name: "Michaels", home_city: "New York, NY")

User.create(username: "ny5", password: "password", first_name: "Anne",
  last_name: "Franconi", home_city: "New York, NY")

User.create(username: "la1", password: "password", first_name: "Chen",
  last_name: "Liu", home_city: "Los Angeles, CA")

User.create(username: "la2", password: "password", first_name: "Maddie",
  last_name: "Hendricks", home_city: "Los Angeles, CA")

User.create(username: "la3", password: "password", first_name: "Barry",
  last_name: "Johnson", home_city: "Los Angeles, CA")

User.create(username: "la4", password: "password", first_name: "Gary",
  last_name: "McGuire", home_city: "Los Angeles, CA")

User.create(username: "la5", password: "password", first_name: "Ben",
  last_name: "Donovan", home_city: "Los Angeles, CA")

User.create(username: "par1", password: "password", first_name: "Pierre",
  last_name: "Lacroix", home_city: "Paris, France")

User.create(username: "par2", password: "password", first_name: "David",
  last_name: "Blanc", home_city: "Paris, France")

User.create(username: "par3", password: "password", first_name: "Marie",
  last_name: "Deschamps", home_city: "Paris, France")

Room.create(
  title: "Bedroom in a 3-bedroom downtown apartment",
  description: "A beautiful room available in downtown San Francisco.
    Perfect for short-term visitors to the Bay Area.",
  address: "770 Stockton St",
  avail_start: Date.new(2017, 6, 10),
  avail_end: Date.new(2017, 6, 18),
  image_url:
   "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490152093/SF1_lspoes.jpg",
  city: "San Francisco",
  host_id: 2,
  booked: false,
  lat: 37.793058,
  lng: -122.407621)

Room.create(
  title: "Living room in a 2-story house in Berkeley",
  description: "We are students living in a 6-bedroom house in Berkeley who
    want to meet some new fellow travellers. Our living room is available for anyone
    who wants to stay there.",
  address: "2512 Dana St.",
  avail_start: Date.new(2017, 5, 10),
  avail_end: Date.new(2017, 5, 20),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490152409/sf2_xaytvq.jpg",
  city: "San Francisco",
  host_id: 3,
  booked: false,
  lat: 37.864373,
  lng: -122.260692
)

Room.create(
  title: "Guesthouse in west San Francisco",
  description: "My wife and I have an unoccupied guesthouse in west San Francisco
    that will be available for the month of July as we will be travelling abroad.",
  address: "787 41st Ave",
  avail_start: Date.new(2017, 7, 1),
  avail_end: Date.new(2017, 7, 30),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490154082/sf3_ap6qjc.jpg",
  city: "San Francisco",
  host_id: 4,
  booked: false,
  lat: 37.773967,
  lng: -122.501652
)

Room.create(
  title: "Bedroom in a 4-bedroom house",
  description: "My bedroom will be available for any travellers who need
    housing in San Francisco. I am moving out and the room will be unoccupied for the last
    two weeks of my lease. The apartment will be shared with my two roommates who
    work long hours and are generally quiet.",
  address: "45 Lansing St. Apt. 27A",
  avail_start: Date.new(2017, 6, 12),
  avail_end: Date.new(2017, 6, 26),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490154087/sf4_bn55ic.jpg",
  city: "San Francisco",
  host_id: 5,
  booked: false,
  lat: 37.7856862,
  lng: -122.39407640000002
)

Room.create(
  title: "Room for tennis enthusiasts in Tiburon",
  description: "I am letting people stay in one of the rooms in my house who
    are enthusiastic about tennis and want to play with myself and my friends at
    my private court. The room has an excellent view and there is breakfast at the
    house on most days",
  address: "1812 Vistazo W St",
  avail_start: Date.new(2017, 5, 1),
  avail_end: Date.new(2017, 9, 30),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490154756/sf5_mycbos.jpg",
  city: "San Francisco",
  host_id: 6,
  booked: false,
  lat: 37.877496,
  lng: -122.453748
)

Room.create(
  title: "Available room for young professionals",
  description: "Small room in a nice luxury building in downtown Manhattan.
    Perfect for someone visiting NYC for their first time. Close to ACE 123
    subway. The building also has free breakfast and valet service",
  address: "95 Wall St. Apt. 1112",
  avail_start: Date.new(2017, 6, 4),
  avail_end: Date.new(2017, 6, 6),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490163371/ny1_wrlfnc.jpg",
  city: "New York",
  host_id: 7,
  booked: false,
  lat: 40.7046936,
  lng: -74.00749780000001
)

Room.create(
  title: "Kitchen in 1-bedroom apartment",
  description: "I live by myself in a small 1-bedroom apartment and am willing to
    stay in the kitchen. It is not perfect, but if you are on a budget and want to
    meet a travel fanatic, this is the place for you",
  address: "224 E 70th St",
  avail_start: Date.new(2017, 7, 23),
  avail_end: Date.new(2017, 8, 10),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490163371/ny2_btzs1q.jpg",
  city: "New York",
  host_id: 8,
  booked: false,
  lat: 40.767541670057234,
  lng: -73.9603042602539
)

Room.create(
  title: "Entire studio available for a weekend",
  description: "My studio in Hoboken will be available for the weekend of Aug 11-13.
    Perfect for travellers in NYC for the weekend. You also get to see New Jersey!",
  address: "630 Garden St.",
  avail_start: Date.new(2017, 8, 11),
  avail_end: Date.new(2017, 8, 13),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490163373/ny3_f4x5wx.jpg",
  city: "New York",
  host_id: 9,
  booked: false,
  lat: 40.74473599999999,
  lng: -74.03081199999997
)

Room.create(
  title: "Space available in back of restaurant",
  description: "I have space available in the back of my restaurant that is always
    available for people needing a place to stay. There is no bed and you will have to bring you own.
    There is internet and free food. Nicely located close to Central Park. Looking forward to meeting you",
  address: "2090 Broadway",
  avail_start: Date.new(2017, 7, 3),
  avail_end: Date.new(2017, 9, 10),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490163371/ny4_vh9wcj.jpg",
  city: "New York",
  host_id: 10,
  booked: false,
  lat: 40.77830549999999,
  lng: -73.98160239999999
)

Room.create(
  title: "Room in 3-bedroom apartment(Girls only)",
  description: "We have an empty room in our apartment in Soho available to
    a fellow female traveller. The apartment is close to a lot of good restauarants and
    bars. We look forward to meeting you and hearing your travel stories",
  address: "104 Thompson St.",
  avail_start: Date.new(2017, 6, 21),
  avail_end: Date.new(2017, 6, 25),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490163372/ny5_yyn5vv.jpg",
  city: "New York",
  host_id: 11,
  booked: false,
  lat: 40.7255852,
  lng: -74.00192340000001
)

Room.create(
  title: "Available room for a weekend",
  description: "I have one available room in my 4-bedroom house that is available
    for the 4th of July weekend. If you like meeting new random people and staying for
    free, this is your place",
  address: "18092 Debi Ln",
  avail_start: Date.new(2017, 6, 30),
  avail_end: Date.new(2017, 7, 5),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490163352/la1_eebqa2.jpg",
  city: "Los Angeles",
  host_id: 12,
  booked: false,
  lat: 33.895262,
  lng: -117.81801300000001
)

Room.create(
  title: "Available guestroom in Studio City",
  description: "Guestroom available in a 6-bedroom house. We have two dogs and a cat and
    there will be breakfast provided.",
  address: "11525 Laurelcrest Dr",
  avail_start: Date.new(2017, 6, 3),
  avail_end: Date.new(2017, 7, 5),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490163353/la2_udppou.jpg",
  city: "Los Angeles",
  host_id: 13,
  booked: false,
  lat: 34.1368744,
  lng: -118.38368739999999
)

Room.create(
  title: "Living room in 3-bedroom apartment",
  description: "We are 3 college students who all share a passion for travelling.
    Occationally, we offer our living room to fellow travellers, but we have one
    requirement: You must have visited at least 20 countries. We'd love to hear from you",
  address: "6722 Yucca St",
  avail_start: Date.new(2017, 8, 1),
  avail_end: Date.new(2017, 8, 5),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490163353/la3_vy3j5o.jpg",
  city: "Los Angeles",
  host_id: 14,
  booked: false,
  lat: 34.1028349,
  lng: -118.33721120000001
)

Room.create(
  title: "Kids house in backyard",
  description: "I built a small house for my kids in the backyard. My kids are now grown up
   and I let people stay there when I am at home. It sounds small, but there is a bed and a TV,
    perfect for anyone who doesn't want to pay for a hotel",
  address: "1845 Carlisle Dr",
  avail_start: Date.new(2017, 9, 10),
  avail_end: Date.new(2017, 9, 30),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490163353/la4_qwuifg.jpg",
  city: "Los Angeles",
  host_id: 15,
  booked: false,
  lat: 34.1156181,
  lng: -118.1093644
)

Room.create(
  title: "Available room, perfect for college student",
  description: "The room is on the second floor of a 4-bedroom loft shared with
    3 other roommates who all go to UCLA. It will be avaible during the final weeks of school at UCLA
    and a perfect opportunity to visit the UCLA campus.",
  address: "506 Glenrock Ave",
  avail_start: Date.new(2017, 6, 5),
  avail_end: Date.new(2017, 6, 21),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490163353/la5_yqga0h.jpg",
  city: "Los Angeles",
  host_id: 16,
  booked: false,
  lat: 34.0680074,
  lng: -118.45124570000002
)

Room.create(
  title: "Available room, shared with 2 students and a cat",
  description: "One fully furnished room available for a week to Paris visitors.
    Relatively close to the Louvre the city center if you want to explore. The room can fit multiple people
    and we are also pet friendly. The room is clean and quiet and you also get your own bathroom",
  address: "26 Rue de Trévise",
  avail_start: Date.new(2017, 6, 1),
  avail_end: Date.new(2017, 6, 30),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490163372/p1_f4grwv.jpg",
  city: "Paris",
  host_id: 17,
  booked: false,
  lat: 48.8744082,
  lng: 2.3454643000000033
)

Room.create(
  title: "Empty room with great Parisian view",
  description: "We have a one empty room available for any fellow traveller. Unfortunately,
    there is only an air bed, so you will have to sleep on it. The room has a balcony overlooking Paris,
    so it is excellent to get some Parisian air.",
  address: "21T Avenue des Fusillés de Châteaubriant",
  avail_start: Date.new(2017, 8, 7),
  avail_end: Date.new(2017, 8, 12),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490163374/par2_sq49le.png",
  city: "Paris",
  host_id: 18,
  booked: false,
  lat: 48.80456239999999,
  lng: 2.4997553000000607
)

Room.create(
  title: "Living room for an artist only",
  description: "Available room for an artist looking to spend practicing and developing
    his/her skills in Paris. We are retired artists who love to meet other people
    and offer 1 one of our available rooms to do so. The room is fully furnished, with
    a big window keeping things bright at day. It is also cleaned every week",
  address: "147 Rue de Vaugirard",
  avail_start: Date.new(2017, 6, 10),
  avail_end: Date.new(2017, 9, 30),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490163372/p3_ksyfmr.jpg",
  city: "Paris",
  host_id: 19,
  booked: false,
  lat: 48.84392279999999,
  lng: 2.3164099000000533
)

Booking.create(
  arrival_date: Date.new(2017, 6, 10),
  depart_date: Date.new(2017, 6, 13),
  num_travellers: 1,
  traveller_id: 1,
  room_id: 1
)

Booking.create(
  arrival_date: Date.new(2017, 8, 11),
  depart_date: Date.new(2017, 8, 12),
  num_travellers: 1,
  traveller_id: 1,
  room_id: 8
)

Booking.create(
  arrival_date: Date.new(2017, 8, 7),
  depart_date: Date.new(2017, 8, 9),
  num_travellers: 1,
  traveller_id: 1,
  room_id: 17
)

r1 = Room.find(1)
r2 = Room.find(8)
r3 = Room.find(17)
#
r3.update(avail_start: Date.new(2017, 8, 9))
r2.update(avail_start: Date.new(2017, 8, 13))
r1.update(avail_start: Date.new(2017, 6, 13))
