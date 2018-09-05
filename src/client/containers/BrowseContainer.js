import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux';
import { requestEvents } from '../actions';
import AppBar from '../components/AppBar';
import BrowseEventCard from '../components/BrowseEventCard';

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
  events: state.requestEventsReducer.events
});

const mapDispatchToProps = dispatch => ({
  // eslint-disable-next-line max-len
  onRequestEvents: (userCoords, withinDistance) => dispatch(requestEvents(userCoords, withinDistance))
});

class BrowseContainer extends Component {
  componentDidMount() {
    const { onRequestEvents } = this.props;
    onRequestEvents([-27.4797707, 153.035123], 100);
  }

  render() {
    const { classes, events } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar title="Browse" />
        <div className={classes.mainLayout}>
          <Grid container spacing={40}>
            <Grid item xs={12} md={8}>
              {events.map(event => (
                <BrowseEventCard key={event.id} event={event} />
              ))}
            </Grid>
            <Grid item xs={12} md={4}>
              <h1>halo</h1>
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
  events: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(BrowseContainer));
