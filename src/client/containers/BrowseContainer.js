import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {
  requestEvents, requestUserLocation, mouseOverMarker, mouseOutMarker
} from '../actions';
import AppBar from '../components/AppBar';
import EventsMapContainer from './EventsMapContainer';
import BrowseEvenList from '../components/BrowseEventList';

import { WITHIN_DISTANCE, N_EVENTS } from '../constants';

const styles = theme => ({
  mainLayout: {
    marginTop: theme.spacing.unit * 3,
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }
});

const mapStateToProps = state => ({
  events: state.requestEventsReducer.events,
  userLocation: state.requestUserLocationReducer.userLocation,
  userLocationPending: state.requestUserLocationReducer.isPending,
  eventsPending: state.requestEventsReducer.isPending,
  overMarker: state.mouseOverMarkerReducer.id
});

const mapDispatchToProps = dispatch => ({
  // eslint-disable-next-line max-len
  onRequestEvents: (userCoords, withinDistance, nEvents) => dispatch(requestEvents(userCoords, withinDistance, nEvents)),
  onRequestUserLocation: () => dispatch(requestUserLocation()),
  onMouseOverMarker: id => dispatch(mouseOverMarker(id)),
  onMouseOutMarker: () => dispatch(mouseOutMarker())
});

class BrowseContainer extends Component {
  componentDidMount() {
    const { onRequestUserLocation } = this.props;
    onRequestUserLocation();
  }

  componentDidUpdate() {
    const {
      onRequestEvents, userLocationPending, eventsPending, userLocation
    } = this.props;

    if (!userLocationPending && eventsPending) {
      onRequestEvents([userLocation.lat, userLocation.lon], WITHIN_DISTANCE, N_EVENTS);
    }
  }

  render() {
    const {
      classes,
      events,
      userLocation,
      eventsPending,
      onMouseOutMarker,
      onMouseOverMarker,
      overMarker
    } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar title="Browse" />
        <div className={classes.mainLayout}>
          <Grid container spacing={40}>
            <Grid item xs={12} md={7}>
              {eventsPending ? (
                <div />
              ) : (
                <div>
                  <Typography variant="headline" gutterBottom>
                    {`Training Events near ${userLocation.city}, ${userLocation.country}`}
                  </Typography>
                  <BrowseEvenList events={events} overMarker={overMarker} />
                </div>
              )}
            </Grid>
            <Grid item xs={12} md={5}>
              {eventsPending ? (
                <div />
              ) : (
                <EventsMapContainer
                  events={events}
                  userLocation={userLocation}
                  onMouseOutMarker={onMouseOutMarker}
                  onMouseOverMarker={onMouseOverMarker}
                />
              )}
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

BrowseContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestEvents: PropTypes.func.isRequired,
  onRequestUserLocation: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired,
  userLocation: PropTypes.object.isRequired,
  eventsPending: PropTypes.bool.isRequired,
  userLocationPending: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(BrowseContainer));
