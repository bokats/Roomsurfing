## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**LoggedInContainer**
 - Logged In

**DashboardContainer**
 - Dashboard
  + UserDetails
  + TravelPlansIndex
    - TravelPlansItem
  + GuestIndex
    - GuestItem
  + Edit
  + Review
 

**SearchResultsContainer**
 - Map
 - Roomindex
  + RoomItem
  + FilterDates

**BookRoomContainer**
 - Map
 - RoomDetails

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/dashboard" | "DashboardContainer" |
| "/search-results" | "SearchResultsContainer" |
| "/book-room/:roomId" | "BookRoomContainer" |
