# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Bookings

- `GET /api/bookings`
  - Returns all the bookings for the current user
  - Takes user_id as param
- `POST /api/bookings`
- `GET /api/bookings/:id`
- `PATCH /api/bookings/:id`
- `DELETE /api/bookings/:id`

### Rooms

- `GET /api/rooms`
  - Returns all the available rooms for the selected city
  - Takes city as param
  - Includes the reviews
- `POST /api/rooms`
- `GET /api/rooms/:id`
- `PATCH /api/rooms/:id`
  - Only if current user_id matches host_id
- `DELETE /api/rooms/:id`
  - Only if current user_id matches host_id

### Guests

- `GET /api/guests`
  - Returns all the guests for the current user's avaiable rooms
  - Takes room_id as param
- `DELETE /api/guests/:id`


