import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
   
  },
  heading: {
    fontSize: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function Panel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}><b>Can I cancel my investment?</b></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography >
            Yes, but only within 24 hours
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}><b>Question 2</b></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            answers to question two
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}><b>Question 3</b></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            answers to question 3
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}><b>Question 4</b></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            answers to question 4
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}><b>Question 5</b></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            answers to question 5
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}><b>Question 6</b></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            answers to question 6
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}><b>Question 7</b></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            answers to question 7
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
     
    </div>
  );
}

Panel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Panel);
