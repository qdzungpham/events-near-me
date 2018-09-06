import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: 'white',
      background: 'grey',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}
  >
    {text}
  </div>
);

const styles = () => ({
  mapLayout: {
    height: 400,
    width: '100%',
    marginTop: 10
  }
});

class EventsMapContainer extends Component {
  componentDidMount() {}

  onChange = () => {
    console.log('map changed');
  };

  _onChildMouseEnter = (key, childProps) => {
    console.log('xxxxxxxxxxxxxxxxxxxxxxx');
  };

  render() {
    const { classes, userLocation, events } = this.props;
    return (
      // Important! Always set the container height explicitly
      <div className={classes.mapLayout}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDraTD9YAlK0aX50I_o-_L79g3DPirLYxA' }}
          defaultCenter={{
            lat: userLocation.lat,
            lng: userLocation.lon
          }}
          defaultZoom={11}
          center={{
            lat: events[0].coords[0],
            lng: events[0].coords[1]
          }}
          onChildMouseEnter={this.onChange}
        >
          {events.map(event => (
            <AnyReactComponent
              key={event.id}
              lat={event.coords[0]}
              lng={event.coords[1]}
              text={event.title}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}

EventsMapContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  userLocation: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired
};

export default withStyles(styles)(EventsMapContainer);
