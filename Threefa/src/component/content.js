import React from 'react';
import {AppBar, Tabs, Tab, Typography, Grid} from '@material-ui/core'
import {Button, Glyphicon, Thumbnail} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './list.css';
import MediaControlCard from './ListOptions';

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
              <Link to="/company">
                <MediaControlCard/>
              </Link>
              <MediaControlCard/>
            </Grid>
            </Grid>
     </div>
  );
}

export default (Content)