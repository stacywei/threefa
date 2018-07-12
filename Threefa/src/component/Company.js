import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button, Glyphicon, ButtonToolBar, Image} from 'react-bootstrap';
//import {Search} from 'react-bootstrap';
//import {ButtonToolbar} from 'react-bootstrap';
import './Company.css';
//import {Login} from './component/CreateAccount';
import Navbar from './Navbar';
import CompanyTabBar from './CompanyTabBar';
 
 
export default class Home extends Component{
    
    render(){
      return(
        <div>
          <Navbar/>
          <header> Hello  is the company page </header>
          <CompanyTabBar/>
        </div>
      );
    }
}