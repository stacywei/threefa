import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button,Grid,Row,Col, Image,Panel} from 'react-bootstrap';
import CompanyInfo from './companyInfo';
import './Company.css';

import Navbar from './Navbar';
import CompanyTabBar from './CompanyTabBar';
 
 
export default class Company extends Component{
    
    render(){
      return(
        <div>
          <Navbar/>
          <Grid className="company-grid">
            <Row>
                <Col xs={6} md={4}>
                    <Image src="assets/restaurant-1.jpg" className="company-img"  />
                </Col>
                <Col xs={6} md={4} >
                    <CompanyInfo />
  
               </Col>
            </Row>
            <Row>
            
            <CompanyTabBar/>
            </Row>
            </Grid>
          
        </div>
      );
    }
}