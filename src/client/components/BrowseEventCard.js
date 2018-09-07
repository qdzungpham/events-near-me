import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    display: 'flex',
    marginTop: theme.spacing.unit
  },
  cardHover: {
    display: 'flex',
    marginTop: theme.spacing.unit,
    'background-color': '#dddddd'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit'
  });
};

const BrowseEventCard = (props) => {
  const {
    classes, event, overMarker, onHoverEventCard
  } = props;

  const onMouseEnter = () => {
    onHoverEventCard(event.id);
  };

  return (
    <Card
      onMouseEnter={onMouseEnter}
      className={overMarker !== event.id ? classes.card : classes.cardHover}
    >
      <Hidden xsDown>
        <CardMedia className={classes.cardMedia} image={event.image} title={event.title} />
      </Hidden>
      <div className={classes.cardDetails}>
        <CardContent>
          <Typography variant="headline">{event.title}</Typography>
          <Typography variant="subheading" color="textSecondary">
            {formatDate(event.dateTime)}
          </Typography>
          <Typography variant="subheading" color="textSecondary">
            {event.location}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

BrowseEventCard.propTypes = {
  classes: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired,
  overMarker: PropTypes.string.isRequired,
  onHoverEventCard: PropTypes.func.isRequired
};

export default withStyles(styles)(BrowseEventCard);
