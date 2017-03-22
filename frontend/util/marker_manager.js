class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
    this._createMarkerFromRoom = this._createMarkerFromRoom.bind(this);
  }

  updateMarkers(rooms) {
    // if (rooms instanceof Array) {
    //   this.rooms = rooms;
    // } else {
    this.rooms = Object.keys(rooms).map(id => rooms[id]);
  // }
    this._roomsToAdd().forEach(this._createMarkerFromRoom);
  }

  _roomsToAdd() {
    const currentRooms = this.markers.map( marker => marker.roomId );
    return this.rooms.filter( room => !currentRooms.includes(room.id) );
  }

  _createMarkerFromRoom(room) {
    const pos = new google.maps.LatLng(room.lat, room.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      roomId: room.id
    });
    // marker.addListener('click', () => this.handleClick(room));
    this.markers.push(marker);
  }
}

export default MarkerManager;
