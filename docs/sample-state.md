```js
{
  currentUser: {
    id: 1,
    username: "jane_doe123",
    first_name: "Jane",
    last_name: "Doe"
    home_city: "San Francisco"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
  },
  bookings: {
    1: {
      arrival_date: 04/17/2017,
      depart_date: 04/20/2017,
      num_travellers: 1,
      traveller_id: 2,
      room_id: 4
    }
  },
  guests: {
    1: {
      arrival_date: 05/02/2017,
      depart_date: 05/05/2017,
      image_url: "profile_pic_url",
      guest_id: 1,
      room_id: 1,
    }
  },
  rooms: {
    1: {
      title: "Room in guesthouse"
      description: "Beautiful room in our guesthouse with private bath",
      avail_date: 04/17/2017,
      avail_date: 04/20/2017,
      image_url: "room_picture_url",
      city: "Paris",
    }
  },
  room_details: {
    1: {
      title: "Room in guesthouse"
      description: "Beautiful room in our guesthouse with private bath",
      avail_date: 04/17/2017,
      avail_date: 04/20/2017,
      image_url: "room_picture_url",
      city: "Paris",
      booked: true
      reviews: {
	1: {
	  rating: 5,
	  comment: "Great room"
	}
      }
    }	
  }
}
```
