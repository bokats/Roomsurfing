import React from 'react';
import { hashHistory } from 'react-router';
import RoomDetailsInfo from './room_details_info';
import MapContainer from '../map/map_container';
import { fetchMapCenter } from "../../util/map_api_util";

class RoomDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.params) {
      this.props.fetchRoomDetails(this.props.params.roomId);
      this.props.fetchRoom(this.props.params.roomId);
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.roomDetails !== newProps.roomDetails) {
      fetchMapCenter(newProps.roomDetails.city).then(res =>
        this.props.updateFilter('mapCenter', {
          center: { lat: res.results[0].geometry.location.lat,
                    lng: res.results[0].geometry.location.lng},
          zoom: 12
      }));
    }
  }

  render() {
    const mapCenter = { lat: 37.7758, lng: -122.435 };
    return (
      <div className="room-details-main">
        <div className="room-details-container">
          <RoomDetailsInfo roomDetails={this.props.roomDetails}
            fetchRoomDetails={this.props.fetchRoomDetails}/>
        </div>
        <div className="search-page-right">
          <MapContainer />
        </div>
      </div>
    );
  }

}

export default RoomDetails;
