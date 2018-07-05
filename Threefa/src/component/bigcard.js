import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Card, CardActions,CardContent} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';


const styles = {
 
  card: {
  	backgroundSize: '100% 100%;',
	  backgroundImage: 'url(https://goo.gl/mMhnZa)',
	  backgroundRepeat: 'no-repeat',
	  height: '250px',
    margin: '10px',
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
  	marginTop: '93px',
  	fontWeight: 'bold',
  	color: 'black',
  	
  },
  actions: {
  	color: 'white'
  }
}
function BigCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="display1" className={classes.title}>
            Start Funding!
          </Typography>
        </CardContent>
        <CardActions style={{justifyContent: 'center'}}>
          <Button size="small" className={classes.actions}>
            What is Threefa?
          </Button>
          <Button size="small" className={classes.actions}>
            Start my page
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

BigCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(BigCard);