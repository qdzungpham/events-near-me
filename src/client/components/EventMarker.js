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
    const { event, onMouseOverMarker } = this.props;
    onMouseOverMarker(event.id);
  };

  render() {
    const { event, onMouseOutMarker } = this.props;
    const { isOpen } = this.state;
    return (
      // eslint-disable-next-line
      <Marker
        title={event.title}
        position={{ lat: event.coords[0], lng: event.coords[1] }}
        onClick={this.onToggleOpen}
        onMouseOver={this.onMouseOver}
        onMouseOut={onMouseOutMarker}
      >
        {isOpen && (
          <InfoWindow onCloseClick={this.onToggleOpen}>
            <h1>hello</h1>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

EventMarker.propTypes = {
  event: PropTypes.object.isRequired,
  onMouseOverMarker: PropTypes.func.isRequired,
  onMouseOutMarker: PropTypes.func.isRequired
};

export default EventMarker;
