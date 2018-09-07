import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {
  requestEvents, requestUserLocation, hoverMarker, hoverEventCard
} from '../actions';
import SimpleAppBar from '../components/AppBar';
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
  overMarker: state.hoverMarkerReducer.id,
  overEventCard: state.hoverEventCardReducer.id
});

const mapDispatchToProps = dispatch => ({
  // eslint-disable-next-line max-len
  onRequestEvents: (userCoords, withinDistance, nEvents) => dispatch(requestEvents(userCoords, withinDistance, nEvents)),
  onRequestUserLocation: () => dispatch(requestUserLocation()),
  onHoverMarker: id => dispatch(hoverMarker(id)),
  onHoverEventCard: id => dispatch(hoverEventCard(id))
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
      onHoverMarker,
      overMarker,
      overEventCard,
      onHoverEventCard
    } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <SimpleAppBar title="training-events-near-me" />
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
                  <BrowseEvenList
                    events={events}
                    overMarker={overMarker}
                    onHoverEventCard={onHoverEventCard}
                  />
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
                  onHoverMarker={onHoverMarker}
                  overEventCard={overEventCard}
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
  userLocationPending: PropTypes.bool.isRequired,
  onHoverMarker: PropTypes.func.isRequired,
  overMarker: PropTypes.string.isRequired,
  overEventCard: PropTypes.string.isRequired,
  onHoverEventCard: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(BrowseContainer));
