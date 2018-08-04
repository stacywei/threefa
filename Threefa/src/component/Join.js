import React from 'react';
import Navbar from './Navbar';
import {Form, InputGroup, form, Checkbox,FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import './Join.css';

export default class Join extends React.Component {
  render() {
  return(
<div>
  <Navbar/>
  <form>
    <FormGroup>
          <ControlLabel>First Name</ControlLabel>
          <FormControl
            type="text"
            placeholder="First Name"
          />
        </FormGroup >
         <FormGroup className="last" >
          <ControlLabel>Last Name</ControlLabel>
          <FormControl
            type="text"
            placeholder="Last Name"
          />
        </FormGroup >
         
         <FormGroup className="phone">
          <ControlLabel>Cell phone #</ControlLabel>
          <FormControl
            type="text"
            placeholder="(123)-456-7890"
          />
          
        </FormGroup>
        <FormGroup className="email">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="text"
            placeholder="helloworld@something.com"
          />
          
        </FormGroup>
    
    
    <FormGroup>
      <ControlLabel>What aspect of this project interest you?</ControlLabel>
      
      <FormControl componentClass="textarea" placeholder="Enter Text" 
      className='textarea'/>
    </FormGroup>
    <FormGroup>
      <ControlLabel>What other investments do you have?</ControlLabel>
      
      <FormControl componentClass="textarea" placeholder="Enter Text" 
      className='textarea'/>
    </FormGroup>
    
     <FormGroup controlId="category">
      <ControlLabel>Amount of shares</ControlLabel> 
      <FormControl componentClass="select">
        <option value="1">10</option>
        <option value="2">100</option>
        <option value="3">1000</option>
        <option value="4">10000</option>
        
      </FormControl>
    </FormGroup>
    
    <FormGroup controlId="category">
      <ControlLabel>Payment Method</ControlLabel> 
      <FormControl componentClass="select">
        <option value="C">Credit Card</option>
        <option value="WT">Wire Transfer</option>
        <option value="P">PayPal</option>
        <option value="A">AliPay</option>
        
      </FormControl>
    </FormGroup>
     <Form inline>
    <FormGroup>
      <ControlLabel>Card Number</ControlLabel>{' '}
        <FormControl
            type="text"
            placeholder="123456789"
        />
    </FormGroup>
   
    
    <FormGroup>
    <ControlLabel> Expiration Date </ControlLabel> {' '}
        <FormControl
            type="date"
        />    
    </FormGroup>
    
    </Form>
     <FormGroup>
      <ControlLabel>Disclaimer</ControlLabel>{' '}
       <p> All investments, 
       is speculative in nature and involves substantial risk of loss.<br/>
        All investors are advised to fully understand all risks associated with any kind of investing they choose to do.<br/>
       Hypothetical or simulated performance is not indicative of future results.  
       </p>
        <FormGroup validationState="success">
    <Checkbox inline>I have read and agree with all the terms stated above</Checkbox> 
  </FormGroup>
       
    </FormGroup>
    <Button type="submit">Submit</Button>
  
  </form>
  </div>
  ) } }



