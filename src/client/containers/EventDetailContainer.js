import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';

import { requestEventDetail } from '../actions';
import AppBar from '../components/AppBar';

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
  },
  eventContent: {
    padding: `${theme.spacing.unit * 3}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0
    }
  },

  eventImage: {
    height: '18em'
  },

  sidebarDetailBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200]
  },

  sidebarSection: {
    marginTop: theme.spacing.unit * 2
  }
});

const mapStateToProps = state => ({
  event: state.requestEventDetailReducer.eventDetail
});

const mapDispatchToProps = dispatch => ({
  // eslint-disable-next-line max-len
  onRequestEvent: id => dispatch(requestEventDetail(id))
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
};

const formatTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
};

class EventDetailContainer extends Component {
  componentDidMount() {
    const { onRequestEvent, match } = this.props;
    onRequestEvent(match.params.id);
  }

  render() {
    const { classes, event } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar title={event.title} />
        <div className={classes.mainLayout}>
          <Card>
            <CardMedia image={event.image} className={classes.eventImage} />
            <CardContent>
              <Grid container spacing={40} className={classes.mainGrid}>
                {/* Main content */}
                <Grid item xs={12} md={8}>
                  <Typography variant="display1" gutterBottom>
                    {event.title}
                  </Typography>
                  <Divider />
                  <Typography className={classes.sidebarSection} variant="body2" gutterBottom>
                    DESCRIPTION
                  </Typography>
                  <Typography>{event.description}</Typography>
                </Grid>
                {/* End main content */}
                {/* Sidebar */}
                <Grid item xs={12} md={4}>
                  <Paper elevation={0} className={classes.sidebarDetailBox}>
                    <Typography variant="body2" gutterBottom>
                      DATE AND TIME
                    </Typography>
                    <Typography>{formatDate(event.dateTime)}</Typography>
                    <Typography>{formatTime(event.dateTime)}</Typography>
                    <Typography className={classes.sidebarSection} variant="body2" gutterBottom>
                      LOCATION
                    </Typography>
                    <Typography>{event.location}</Typography>
                    <Typography className={classes.sidebarSection} variant="body2" gutterBottom>
                      AVAILABLE SEATS
                    </Typography>
                    <Typography>{event.availSeats}</Typography>
                  </Paper>
                </Grid>
                {/* End sidebar */}
              </Grid>
            </CardContent>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

EventDetailContainer.propTypes = {
  classes: PropTypes.func.isRequired,
  onRequestEvent: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(EventDetailContainer));
