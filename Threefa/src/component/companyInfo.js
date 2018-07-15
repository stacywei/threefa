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
  join:{
    position:"absolute",
    top:"250px",
    left: "250px",
    backgroundColor: "#5fc497",
    color: "white",
  },
    
   amount:{
    position: "absolute",
    top: "30px",
    left: "20px",
    
    },
    period:{
        position: "absolute",
        top: "80px",
        left: "200px", 
    },
    investor:{
    position: "absolute",
    top: "130px",
    left: "200px", 
    },
    target:{
     position: "absolute",
    top: "180px",
    left: "20px",
    },
    name:{
        position: "absolute",
    top: "30px",
    left: "200px",
    },
    category:{
       position: "absolute",
    top: "80px",
    left: "20px", 
    },
    contact:{
    position: "absolute",
    top: "130px",
    left: "20px",
    },
    benefit:{
         position: "absolute",
    top: "180px",
    left: "200px",
    }
    
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3" className={classes.amount} color="textSecondary">
            Amount raised:
        </Typography>
         <Typography variant="headline" component="h3" className={classes.period} color="textSecondary">
            Fund raised period:
        </Typography>
        <Typography variant="headline" component="h3" className={classes.investor} color="textSecondary">
            Number of investors:
        </Typography>
        <Typography variant="headline" component="h3" className={classes.target} color="textSecondary">
            Target amount:
        </Typography>
         <Typography variant="headline" component="h3" className={classes.name} color="textSecondary">
            Restaurant name:
        </Typography>
        <Typography variant="headline" component="h3" className={classes.category} color="textSecondary">
            Category:
        </Typography>
        <Typography variant="headline" component="h3" className={classes.contact} color="textSecondary">
           Contact:
        </Typography>
        <Typography variant="headline" component="h3" className={classes.benefit} color="textSecondary">
            Benefits:
        </Typography>

        
    
        <Button size="large" className={classes.join}>Join</Button>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
