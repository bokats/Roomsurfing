# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
first_name      | string    | not null, indexed
last_name       | string    | not null, indexed
home_city       | string    | not null

## rooms
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
address     | text      | not null
avail_start | date   	| not null
avail_end   | date      | not null
image_url   | string    | not null
city        | string    | not null
booked      | boolean   | not null
host_id     | integer   | not null, foreign key (references users), indexed

## bookings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
arrival_date    | date      | not null
depart_date     | date      | not null
num_ travellers | integer   | not null
traveller_id    | integer   | not null, foreign key (references users), indexed
room_id         | integer   | not null, foreign key (references rooms), indexed
 
## guests
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
arrival_date| date      | not null
depart_date | date      | not null
description | text      | not null
image_url   | string    | not null
guest_id    | integer   | not null, foreign key (references users), indexed
room_id     | integer   | not null, foreign key (references rooms), indexed

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
rating      | integer   | not null
comment     | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
room_id     | integer   | not null, foreign key (references rooms), indexed


