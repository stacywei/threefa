import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import './ListOptions.css';

const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 100,
    height: 100,
    alignItems: 'center',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

function MediaControlCard(props) {
  const { classes, theme } = props;

  return (
    <div>
      <Card className={classes.card}>
      <CardMedia
          className={classes.cover}
          image="assets/restaurant-1.jpg"
          title="Description of Restaurant"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="headline">Description of Restaurant</Typography>
            <Typography variant="subheading" color="textSecondary">
              % funded
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton>
                <FavoriteBorder />
            </IconButton>
          </div>
        </div>
      </Card>
      <br/>
    </div> 
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);