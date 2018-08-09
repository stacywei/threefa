import React from 'react';
import { Tab, Grid } from '@material-ui/core'
import {Thumbnail} from 'react-bootstrap';
import MediaControlCard from './ListOptions';
import '../styles/Content.css';

function Content(props) {
    return (
    <div>
	  <h3> Featured Restaurant </h3>
      <br/>
      <Grid container spacing={24}>
      	<Grid item xs={12} sm={6}>
          <Thumbnail src='assets/restaurant-1.jpg' responsive/>
            </Grid>
            <Grid item xs={12} sm={6} >
              <Tab label="NEW"/>
              <Tab label="POPULAR"/> 
              <div className='listofrestaurants'>    
              <MediaControlCard/>
              <MediaControlCard/>
              <MediaControlCard/>
              </div>
            </Grid>
            </Grid>
     </div>
  );
}

export default (Content)