import React, { Component } from 'react';
import {ControlLabel, FormControl, Button, FormGroup} from 'react-bootstrap';
import '../styles/CreateAccount.css';
import Navbar from './Navbar';


export default class Create extends Component{
    
    
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
        <div>
        <Navbar/>
      
      <div className="Create">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email">
            <ControlLabel className = "Create-eLabel"> Email Address:</ControlLabel>
            <FormControl className="Create-email"
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              />
          </FormGroup>
          <FormGroup controlId="password"  >
            <ControlLabel className = "Create-pLabel"> Create a password: </ControlLabel>
            <FormControl className = "Create-pass"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              
            />
          </FormGroup>
          <Button  className = "Create-button"
           
            disabled={!this.validateForm()}
            type="submit"
          >
            Create Account
          </Button>
          
        </form>
      </div>
      </div>
    );
  }
}