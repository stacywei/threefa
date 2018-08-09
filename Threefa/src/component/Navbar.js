import React from 'react';
import {AppBar,Toolbar, Button,IconButton, Menu, MenuItem, MuiThemeProvider} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {FormGroup, FormControl} from 'react-bootstrap/es';
import theme from './Theme.js';
import '../styles/Navbar.css';


const styles = theme => ({
flex: {
    flex: 1,
    marginBottom: '10px',
    fontWeight:'bold',
    fontSize:'12px'
},
bar: {
	background: 'black',
  height: '50px',
},
login: {
  marginLeft: 30,
  marginRight: 0,
  background: "green",
  color: "white",
  marginBottom: 15,
  fontSize:'12px'
},
hamburger: {
  marginTop: 30,
},
icon: {
  marginBottom:12,
  color: 'white'
},
search: {
  marginBottom: 15,
},
link:{
  color: 'white',
  fontSize: '1.5em',
}
});

class Navbar extends React.Component{
state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };


 render() {
    const { anchorEl } = this.state;
    const {flex, bar, login, hamburger, icon, search, link} =this.props.classes; 

return (
  <MuiThemeProvider theme={theme}>
	<div> 
		<AppBar position="static" className={bar} >
			<Toolbar>
				<IconButton className= {icon} onClick={this.handleClick}>
            	<MenuIcon /> </IconButton>
            	<Menu
          			className={hamburger}
          			anchorEl={anchorEl}
          			open={Boolean(anchorEl)}
          			onClose={this.handleClose}>
         		 <MenuItem onClick={this.handleClose}><a href="/Company">Company</a></MenuItem>
             <MenuItem onClick={this.handleClose}><a href="/About">About Us</a></MenuItem>  
         		 <MenuItem onClick={this.handleClose}><a href="/FAQ">FAQs</a></MenuItem>
          	<MenuItem onClick={this.handleClose}>Logout</MenuItem></Menu>
				<Typography className={flex}>
					<a href='/' className={link} >Threefa </a>
				</Typography>
        <FormGroup className="searchbar">
          <FormControl type="text" placeholder="Search" className={search}/>
        </FormGroup>{' '}
        <a href="/login"><Button variant="raised" className={login} >Login</Button></a>
			</Toolbar>
		</AppBar>
	</div>
  </MuiThemeProvider>
	)
}
}
export default withStyles(styles)(Navbar);