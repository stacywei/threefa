import React from 'react';
import Navbar from './Navbar';
import {Form, InputGroup, form, Checkbox,FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import './startform.css';

export default class formInstance extends React.Component {
  render() {
  return(
<div>
  <Navbar/>
  <h4> Fill out the form below to start your fundraising campaign! </h4>
  <form>
    <FormGroup>
          <ControlLabel>Name of Restaurant</ControlLabel>
          <FormControl
            type="text"
            placeholder="Name"
          />
        </FormGroup>
    <FormGroup controlId="category">
      <ControlLabel>Category of the Restaurant</ControlLabel> 
      <FormControl componentClass="select">
        <option value="E">Ethnic</option>
        <option value="CD">Casual Dining</option>
        <option value="FD">Fine Dining</option>
        <option value="D">Dessert</option>
        <option value="P">Pop Up</option>
        <option value="B">Bakery</option>
      </FormControl>
    </FormGroup>
    <FormGroup>
      <ControlLabel>Target amount to be raised</ControlLabel>
        <FormControl
            type="number"
            placeholder="0"
        />
    </FormGroup>
    <Form inline>
    <ControlLabel className='date'>Fundraiser Period</ControlLabel> <br/>
    <FormGroup>
    <ControlLabel> From </ControlLabel> {' '}
        <FormControl
            type="date"
        />    
    </FormGroup>
    <FormGroup>
      <ControlLabel> to </ControlLabel> {' '}
       <FormControl
            type="date"
        />
    </FormGroup>
    </Form>
    <FormGroup>
      <ControlLabel> Usage of Funds </ControlLabel> <br/>
      <Checkbox inline>Option 1</Checkbox> <Checkbox inline>Option 2</Checkbox>
      <Checkbox inline>Option 3</Checkbox>
    </FormGroup>
    <FormGroup>
      <ControlLabel>Benefits </ControlLabel> <br/>
      <Checkbox inline>Option 1</Checkbox> <Checkbox inline>Option 2</Checkbox>
      <Checkbox inline>Option 3</Checkbox>
    </FormGroup>
    <FormGroup>
      <ControlLabel>Description of Restaurant</ControlLabel>
      <p><small>What is the project about? Why the project is special? Tell Investors about the passion(s) of the restaurant</small></p>
      <FormControl componentClass="textarea" placeholder="Enter Text" 
      className='textarea'/>
    </FormGroup>
    <FormGroup>
      <ControlLabel> Upload some photos </ControlLabel>
      <FormControl
            type="file"
      />
    </FormGroup>
     <Button type="submit">Submit</Button>
  </form>
  </div>
  ) } }



