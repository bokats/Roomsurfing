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
Review.delete_all

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

User.create(username: "par4", password: "password", first_name: "Louis",
  last_name: "Debuchy", home_city: "Paris, France")

User.create(username: "rio1", password: "password", first_name: "Maria",
  last_name: "Silva", home_city: "Rio de Janeiiro, Brazil")

User.create(username: "rio2", password: "password", first_name: "Pedro",
  last_name: "Lucas", home_city: "Rio de Janeiiro, Brazil")

User.create(username: "rio3", password: "password", first_name: "Emilio",
  last_name: "Souza", home_city: "Rio de Janeiiro, Brazil")

User.create(username: "tok1", password: "password", first_name: "Ken",
  last_name: "Nishimura", home_city: "Tokyo, Japan")

User.create(username: "tok2", password: "password", first_name: "Sho",
  last_name: "Fujimura", home_city: "Tokyo, Japan")

User.create(username: "tok3", password: "password", first_name: "Lilly",
  last_name: "Chang", home_city: "Tokyo, Japan")

User.create(username: "joh1", password: "password", first_name: "Ibe",
  last_name: "Botha", home_city: "Johannesburg, South Africa")

User.create(username: "joh2", password: "password", first_name: "James",
  last_name: "Thompson", home_city: "Johannesburg, South Africa")

User.create(username: "joh3", password: "password", first_name: "Megan",
  last_name: "Harrington", home_city: "Johannesburg, South Africa")

User.create(username: "sf6", password: "password", first_name: "Brendan",
  last_name: "Benjamin", home_city: "San Francisco, CA")

User.create(username: "sf7", password: "password", first_name: "Emily",
  last_name: "Christopher", home_city: "San Francisco, CA")

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
  address: "2423 Harrison St",
  avail_start: Date.new(2017, 5, 10),
  avail_end: Date.new(2017, 5, 20),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490152409/sf2_xaytvq.jpg",
  city: "San Francisco",
  host_id: 3,
  booked: false,
  lat: 37.758368,
  lng: -122.412469
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
  address: "294 Glen Dr",
  avail_start: Date.new(2017, 5, 1),
  avail_end: Date.new(2017, 9, 30),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490154756/sf5_mycbos.jpg",
  city: "San Francisco",
  host_id: 6,
  booked: false,
  lat: 37.857089,
  lng: -122.489365
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
  address: "1132 Green St",
  avail_start: Date.new(2017, 6, 30),
  avail_end: Date.new(2017, 7, 5),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490163352/la1_eebqa2.jpg",
  city: "Los Angeles",
  host_id: 12,
  booked: false,
  lat: 34.131422,
  lng: -118.240371
)

Room.create(
  title: "Available guestroom in Monterey Park",
  description: "Guestroom available in a 6-bedroom house. We have two dogs and a cat and
    there will be breakfast provided.",
  address: "304 Russell Ave",
  avail_start: Date.new(2017, 6, 3),
  avail_end: Date.new(2017, 7, 5),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490163353/la2_udppou.jpg",
  city: "Los Angeles",
  host_id: 13,
  booked: false,
  lat: 34.059434,
  lng: -118.119508
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
  title: "Available room, downtown Los Angeles",
  description: "The room is on the second floor of a 4-bedroom loft shared with
    3 other roommates who all go to UCLA. It will be avaible during the final weeks of school at UCLA
    and a perfect opportunity to visit LA",
  address: "819 South Santee",
  avail_start: Date.new(2017, 6, 5),
  avail_end: Date.new(2017, 6, 21),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490163353/la5_yqga0h.jpg",
  city: "Los Angeles",
  host_id: 16,
  booked: false,
  lat: 34.041159,
  lng: -118.252285
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

Room.create(
  title: "Room close to Champs-Elysees",
  description: "I have a small room with a bed available for any tourists visiting
    the city. It is on the 1st floor, it's clean and it is prime location close to
    Champs-Elysees. The building is old, just like most in Paris, but perfect for a short-term
    stay. I also have some free passes for the Eiffel Tower.",
  address: "7 Rue Rembrandt",
  avail_start: Date.new(2017, 7, 5),
  avail_end: Date.new(2017, 7, 15),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490217261/par4_a3vptv.jpg",
  city: "Paris",
  host_id: 20,
  booked: false,
  lat: 48.8772337,
  lng: 2.3080457999999453
)

Room.create(
  title: "Room close to the famous Copacabana",
  description: "Room available right next to Copacabana. This is prime location in Rio
    and I letting visitors stay in one of my rooms to meet new people. I want people to
    have a great stay in Brazil. The room is clean, has a bed and internet and it is in a safe
    area.",
  address: "R. Gen. Barbosa Lima, 99 - Copacabana",
  avail_start: Date.new(2017, 6, 10),
  avail_end: Date.new(2017, 6, 20),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490217261/rio1_szfe1t.jpg",
  city: "Rio de Janeiro",
  host_id: 21,
  booked: false,
  lat: -22.9666385,
  lng: -43.180231100000015
)

Room.create(
  title: "Living room for a weekend",
  description: "Living room is available for a weekend in August to host any newcomer to
    Brazil. We are a family of 2 and love hosting and meeting people from aroung the world.
    The room will only be available for non-Brazilians. The room has a bed, but may be load,
    as it is between the bedroom and the apartment entrance. The apartment is also close to the airport",
  address: "R. Cardeal Dom Sebastião Leme, 30 - Santa Teresa",
  avail_start: Date.new(2017, 6, 30),
  avail_end: Date.new(2017, 7, 2),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490217261/rio2_ogt5ts.jpg",
  city: "Rio de Janeiro",
  host_id: 22,
  booked: false,
  lat: -22.9164099,
  lng: -43.18921979999999
)

Room.create(
  title: "Room for international students",
  description: "Room is available in the International Students Foundation building
    for 4 days for any students coming on a university visit. The room will only be
    available for non-Brazilian students. You will have you own bathroom and a king bed.
    Your neighbors will all be other international students and it is a perfect
    opportunity to meet new friends",
  address: "128 R. Soares da Costa",
  avail_start: Date.new(2017, 7, 10),
  avail_end: Date.new(2017, 7, 14),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490217357/rio3_tcg9d8.jpg",
  city: "Rio de Janeiro",
  host_id: 23,
  booked: false,
  lat: -22.9252191,
  lng: -43.23119270000001
)

Room.create(
  title: "Room in 2-bedroom apartment",
  description: "I have an available room in my 2-bedroom apartment. It has a bed, it's clean,
    and it is close proximity to Tokyo city center. There are many good restaurants
    close by. Come and experience the Japanese culture without paying for hotel.",
  address: "2 Chome-7-11 Hakusan",
  avail_start: Date.new(2017, 6, 15),
  avail_end: Date.new(2017, 6, 22),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490217283/tok1_rmf5ft.jpg",
  city: "Tokyo",
  host_id: 24,
  booked: false,
  lat: 35.7158334,
  lng: 139.7490586
)

Room.create(
  title: "Guest room in a family home",
  description: "The room is located in Minato-ku district. We have a 3-bedroom apartment
    and have one room available as our kid will be away. Perfect for any tourists as it is close to
    city center, many touristic attractions. There is internet and we have free passes for the Tokyo
    subway in case you want to use it.",
  address: "5 Chome-9-3 Minamiazabu",
  avail_start: Date.new(2017, 7, 1),
  avail_end: Date.new(2017, 7, 10),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490217283/tok2_kvlnym.jpg",
  city: "Tokyo",
  host_id: 25,
  booked: false,
  lat: 35.6537733,
  lng: 139.72433509999996
)

Room.create(
  title: "Large bedroom in Tokyo",
  description: "Beautiful room in an apartment with Chinese students in Tokyo. We
    are looking to meet new travellers and have one of our rooms available for
    anyone visiting Tokyo. We will only accept people under the age of 30. The room is
    clean, has internet free coffee in the morning.",
  address: "1 Chome-8-16 Harumi",
  avail_start: Date.new(2017, 6, 15),
  avail_end: Date.new(2017, 6, 22),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490217283/tok3_hb1v53.jpg",
  city: "Tokyo",
  host_id: 26,
  booked: false,
  lat: 35.6728535,
  lng: 139.81740969999998
)

Room.create(
  title: "Free bedroom in Johannesburg",
  description: "I have an available bedroom in 4-bedroom apartment hosting visitors
    to Johannesburg. It is clean, in good neighborhood and the roommates are all from
    different countries doing non-profit work in Africa. We are looking to host and meet new people
    from around the world",
  address: "238 Jeppe St",
  avail_start: Date.new(2017, 7, 5),
  avail_end: Date.new(2017, 7, 22),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490217246/joh1_jzbx77.jpg",
  city: "Johannesburg",
  host_id: 27,
  booked: false,
  lat: -26.2009599,
  lng: 28.050209999999993
)

Room.create(
  title: "Room close to Homestead Park",
  description: "We have an empty guest room available for a week to anyone who is
    visiting Johannesburg. The rooms is on the 2nd floor and you will have lots of private space. It is clean, quiet and the roommates are two dotors in their
    mid 40s. Please take a cab to get to the apartment if you are coming from the airport.
    ",
  address: "13 De Gaulle Rd",
  avail_start: Date.new(2017, 8, 1),
  avail_end: Date.new(2017, 8, 10),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490217246/joh2_girgpn.jpg",
  city: "Johannesburg",
  host_id: 28,
  booked: false,
  lat: -26.20414,
  lng: 28.001840000000016
)

Room.create(
  title: "Guest house in Johannesburg",
  description: "Room available in a private guest house in Jonannesburg. It has private
    bathroom and backyard. It is in a safe neighborhood and good place for any short-term
    visitors. We have hosted a number of people and have great stories to share.
    ",
  address: "63 Lamoen St",
  avail_start: Date.new(2017, 6, 5),
  avail_end: Date.new(2017, 6, 20),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490217246/joh3_p7gfri.jpg",
  city: "Johannesburg",
  host_id: 29,
  booked: false,
  lat: -26.20283,
  lng: 28.078089999999975
)

Room.create(
  title: "Large bedroom in the Castro",
  description: "Room available in a 4-bedroom apartment in the Castro. It is shared
    with 3 roommates, all of whom are young professionals very passionate about travel and
    looking to meet fellow travellers. The room has a private closet to store luggage
    and free coffee and internet.",
  address: "159 Collingwood St",
  avail_start: Date.new(2017, 7, 7),
  avail_end: Date.new(2017, 7, 20),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490217273/sf6_o46igy.jpg",
  city: "San Francisco",
  host_id: 30,
  booked: false,
  lat: 37.75991339999999,
  lng: -122.4359106
)

Room.create(
  title: "Room in friendly apartment",
  description: "Room in Russian Hill available for begginning of July. Our third
    roommate is leaving and we would love to meet and let and someone stay in the room for a week
    before the new person moves in. The room is clean, quiet and located close to downtown and the Marina.
    The roommates are both working in theater and like to get breakfast and dinner together.
    ",
  address: "1188 Vallejo St",
  avail_start: Date.new(2017, 6, 26),
  avail_end: Date.new(2017, 7, 2),
  image_url: "http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490217273/sf7_blq7vu.jpg",
  city: "San Francisco",
  host_id: 31,
  booked: false,
  lat: 37.7977061,
  lng: -122.41679959999999
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

Review.create(
  rating: 5,
  comment: "I highly recommend this room. I stayed
    there in November 2016 for 2 days and the location is almost perfect.
    The host is also very friendly and likes to have a chat about
    interesting stories.",
  author_id: 24,
  room_id: 1
)

Review.create(
  rating: 5,
  comment: "You can't ask for more when visiting San Francisco and not
    paying any money for your room. The hosts had incredible stories from
    travel journeys. The room was also very clean.",
  author_id: 12,
  room_id: 1
)

Review.create(
  rating: 4,
  comment: "Very big room and big widnow and gets a lot of light. Also close
    to a lot of restaurants and bars in the Mission District.",
  author_id: 15,
  room_id: 2
)

Review.create(
  rating: 5,
  comment: "Absolutely incredible guesthouse and great hosts. I am really lucky
    to have had the opportunity to stay there. Highly recommend to anyone visiting
    San Francisco",
  author_id: 9,
  room_id: 3
)

Review.create(
  rating: 2,
  comment: "Too far from the city center. If you are there for a couple of
    days, try to stay somewhere closer to Champs-Elysees",
  author_id: 19,
  room_id: 17
)

Review.create(
  rating: 1,
  comment: "The room was clean, but I didn't feel the neighborhood was safe.
    Try to stay away",
  author_id: 25,
  room_id: 11
)

Review.create(
  rating: 5,
  comment: "This is what Roomsurfing is all about. Not only was my room free,
    but the hosts were extremely friendly and we shares some travel stories. Can
    you believe they climbed Mt. Everest a couple of years ago..",
  author_id: 28,
  room_id: 12
)

Review.create(
  rating: 5,
  comment: "This is what Roomsurfing is all about. Not only was my room free,
    but the hosts were extremely friendly and we shares some travel stories. Can
    you believe they climbed Mt. Everest a couple of years ago..",
  author_id: 28,
  room_id: 12
)

Review.create(
  rating: 1,
  comment: "Avoid at any cost. I stayed there one night and it was really dirty
    and I even think there were some rats. This listing should be removed from
    Roomsurfing",
  author_id: 4,
  room_id: 9
)

Review.create(
  rating: 1,
  comment: "If you are looking for an authentic Japanese experience, try to
    stay with Ken. He is an amazing host, took me around the city and showed me
    spots I would never have known by myself.",
  author_id: 11,
  room_id: 23
)

r1 = Room.find(1)
r2 = Room.find(8)
r3 = Room.find(17)
#
r3.update(avail_start: Date.new(2017, 8, 9))
r2.update(avail_start: Date.new(2017, 8, 13))
r1.update(avail_start: Date.new(2017, 6, 13))
