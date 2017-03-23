import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router';

class Map extends React.Component {
  componentDidMount() {

    this.map = new google.maps.Map(this.mapNode, this.props.filters.mapCenter);
    this.MarkerManager = new MarkerManager(this.map);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.rooms !== newProps.rooms) {
      if (!this.props.params.roomId) {
        this.MarkerManager.updateMarkers(newProps.rooms);
      } else {
        this.MarkerManager.updateMarkers({[this.props.params.roomId]:
          newProps.rooms[this.props.params.roomId]});
      }
    }

    if (this.props.filters.mapCenter !== newProps.mapCenter) {
      this.map.panTo(newProps.filters.mapCenter.center);
      this.map.setZoom(newProps.filters.mapCenter.zoom);
    }
  }

  render() {
    return (
      <div className='map-search' ref={ map => this.mapNode = map }>
      </div>
    );
  }
}

export default withRouter(Map);
