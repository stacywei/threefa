import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
const styles = theme => ({
  root: {
    position:"absolute",
    
    left: "150px",
    height:"300px",
    width: "450px",
    
    },
  
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography className={classes.title} color="textSecondary">
            Amount raised:
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
        <Button size="small">Join</Button>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
