import React, { Component } from "react";
import { Button, FormGroup, FormControl} from "react-bootstrap";
import "./Login.css";
import Navbar from './Navbar';
import AccountCircle from '@material-ui/icons/es/AccountCircle';

export default class Login extends Component {
    
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
      
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
        <AccountCircle className="Login-icon" />
          <FormGroup controlId="email" >
            
            <FormControl className="Login-email"
              autoFocus
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              />
          </FormGroup>
          <FormGroup controlId="password">
            
            <FormControl className = "Login-pass"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              placeholder="Password"
            />
          </FormGroup>
          <Button className = "Login-button"
            
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
         <p className="Login-or"> or</p>
         <a href = "/Create" className= "Login-create" > New User? Create an account </a>
        </form>
      </div>
      </div>
    );
  }
}