
export const fetchRooms = () => {
  return $.ajax ({
    method: "GET",
    url: 'api/rooms'
  });
};

export const fetchRoom = roomId => {
  return $.ajax ({
    method: "GET",
    url: `api/rooms/${roomId}`
  });
};

export const createRoom = room => {
  return $.ajax ({
    method: "POST",
    url: 'api/rooms',
    data: {room}
  });
};

export const updateRoom = room => {
  return $.ajax ({
    method: "PATCH",
    url: `api/rooms/${room.id}`,
    data: {room}
  });
};

export const deleteRoom = roomId => {
  return $.ajax ({
    method: "DELETE",
    url: `api/rooms/${roomId}`
  });
};
