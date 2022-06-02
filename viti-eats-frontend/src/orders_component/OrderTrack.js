// import React from 'react'
import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
const mapStyles = {
  width: '100%',
  height: '100%'
};
function OrderTrack() {
  return (
    <div><h1>Order Track</h1></div>
  )
}
// ...



export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };
  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};

  
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -18.1493054,
            lng: 178.4446442
          }
        }
        >
          <Marker
          onClick={this.onMarkerClick}
          name={'USP Suva'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      
      </Map>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCN5uttg4HA9kxkyO4rcwyZchiJeQ6S64U'
})(MapContainer);

// export default OrderTrack