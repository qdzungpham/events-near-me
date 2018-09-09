import React from 'react';
import PropTypes from 'prop-types';
import { Marker, InfoWindow } from 'react-google-maps';

class EventMarker extends React.Component {
  state = {
    isOpen: false
  };

  onToggleOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  onMouseOver = () => {
    const { event, onHoverMarker } = this.props;
    onHoverMarker(event.id);
  };

  onMouseOut = () => {
    const { onHoverMarker } = this.props;
    onHoverMarker('-1');
  };

  render() {
    const { event } = this.props;
    const { isOpen } = this.state;
    return (
      // eslint-disable-next-line
      <Marker
        id="marker"
        title={event.title}
        position={{ lat: event.coords[0], lng: event.coords[1] }}
        onClick={this.onToggleOpen}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        {isOpen && (
          <InfoWindow id="infowindow" onCloseClick={this.onToggleOpen}>
            <h3>{event.title}</h3>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

EventMarker.propTypes = {
  event: PropTypes.object.isRequired,
  onHoverMarker: PropTypes.func.isRequired
};

export default EventMarker;
