json.extract! @review, :id, :rating, :comment, :room_id
author = @review.author
json.author_first_name author.first_name
json.author_last_name author.last_name
json.author_city author.home_city
