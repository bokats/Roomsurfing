export const fetchReview = (roomId, reviewId) => {
  return $.ajax ({
    method: "GET",
    url: `api/rooms/${roomId}/reviews/${reviewId}`
  });
};

export const createReview = (roomId, review) => {
  return $.ajax ({
    method: "POST",
    url: `api/rooms/${roomId}/reviews`,
    data: {review}
  });
};

export const updateReview = (roomId, review) => {
  return $.ajax ({
    method: "PATCH",
    url: `api/rooms/${roomId}/reviews/${review.id}`
  });
};

export const deleteReview = (roomId, reviewId) => {
  return $.ajax ({
    method: "DELETE",
    url: `api/rooms/${roomId}/reviews/${reviewId}`
  });
};
