import React, { Component } from 'react';
//import {Search} from 'react-bootstrap';
//import {ButtonToolbar} from 'react-bootstrap';
import './Home.css';
import BigCard from './bigcard'
import Navbar from './Navbar';
import Tabfilter from './list'
import Fave from './Fave.js'
 
 
export default class Home extends Component{
    
    render(){
      return(
        <div>
        <Navbar/>
        <BigCard/>
       	<Tabfilter/>
       	<Fave/>
        </div>
      );
    }
}