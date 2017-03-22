class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
    this._createMarkerFromRoom = this._createMarkerFromRoom.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
  }

  updateMarkers(rooms) {
    this.rooms = Object.keys(rooms).map(id => rooms[id]);
    console.log(this.rooms);
    this._roomsToAdd().forEach(this._createMarkerFromRoom);
    this._markersToRemove().forEach(this._removeMarker);
  }

  _roomsToAdd() {
    const currentRooms = this.markers.map( marker => marker.roomId );
    return this.rooms.filter( room => !currentRooms.includes(room.id) );
  }

  _markersToRemove(){
    const roomIds = this.rooms.map( room => room.id );
    return this.markers.filter( marker => !roomIds.includes(marker.roomId) );
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

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }

}

export default MarkerManager;
