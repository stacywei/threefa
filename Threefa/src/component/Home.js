import React, { Component } from 'react';
//import {Search} from 'react-bootstrap';
//import {ButtonToolbar} from 'react-bootstrap';
import './Home.css';
//import BigCard from './bigcard'
import MainCarousel from './MainCarousel';
import Navbar from './Navbar';
import Tabfilter from './list'
import Fave from './Fave.js'

 
export default class Home extends Component{
    
    render(){
      return(
        <div>
        <Navbar/>
        <MainCarousel/>
       	<Tabfilter/>
       	<Fave/>
        </div>
      );
    }
}