import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import EventMarker from '../components/EventMarker';

const { MarkerClusterer } = require('react-google-maps/lib/components/addons/MarkerClusterer');

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDraTD9YAlK0aX50I_o-_L79g3DPirLYxA&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
    mapElement: <div style={{ height: '100%' }} />
  }),
  withScriptjs,
  withGoogleMap
)(({
  events, userLocation, onMouseOutMarker, onMouseOverMarker
}) => (
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: userLocation.lat, lng: userLocation.lon }}
    center={{
      lat: events[0].coords[0],
      lng: events[0].coords[1]
    }}
  >
    <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
      {events.map(event => (
        <EventMarker
          key={event.id}
          event={event}
          onMouseOutMarker={onMouseOutMarker}
          onMouseOverMarker={onMouseOverMarker}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
));

export default MyMapComponent;
