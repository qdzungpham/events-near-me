import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  }
};

const SimpleAppBar = (props) => {
  const { classes, title } = props;
  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography className={classes.flex} variant="title" color="inherit">
            {title}
          </Typography>
          <Button href="https://github.com/qdzungpham/training-events-near-me" color="inherit">
            GITHUB
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default withStyles(styles)(SimpleAppBar);
