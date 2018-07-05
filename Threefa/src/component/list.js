import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {AppBar, Tabs, Tab, Typography} from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views';
import {Button, Glyphicon} from 'react-bootstrap';
import './list.css';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor:'white',
    marginTop:'0px',
  },
  bar: {
  	marginLeft: '20px',
  	marginRight:'20px',
  }

});

class Tabfilter extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes} = this.props;

    return (
      <div className={classes.root}>
          <Tabs value={this.state.value} 
          onChange={this.handleChange} 
          className={classes.bar} 
          indicatorColor='primary'
          fullWidth>
            <Tab label="Ethnic" />
            <Tab label="Fast Food" />
            <Tab label="Casual Dining"/>
            <Tab label="Fine Dining"/>
            <Tab label="Dessert"/>
			<Tab label="Cafe/Bakery"/>
			<Tab label="All"/>
          </Tabs>
          <SwipeableViews
          axis={this.props.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={this.props.direction}>
          <Typography variant='title'> Ethnic <Button className='Button'> View All</Button></Typography> 
          </TabContainer>
          <TabContainer dir={this.props.direction}><Typography variant='title'> Fast Food  
          </Typography><Glyphicon glyph="arrow-right"/>  </TabContainer>
          <TabContainer dir={this.props.direction}><Typography variant='title'> Casual Dining  
          <Button> View All</Button> </Typography> </TabContainer>
          <TabContainer dir={this.props.direction}><Typography variant='title'> Fine Dining  
           </Typography> </TabContainer>
          <TabContainer dir={this.props.direction}><Typography variant='title'> Dessert <p> view all </p> 
           </Typography> </TabContainer>
          <TabContainer dir={this.props.direction}><Typography variant='title'> Cafe/Bakery <p> view all </p> 
          </Typography> </TabContainer>
          <TabContainer dir={this.props.direction}><Typography variant='title'> All <p> view all </p> 
          </Typography> </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

Tabfilter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tabfilter);