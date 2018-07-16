import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import {FormGroup, FormControl} from 'react-bootstrap/es';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';
// import './Home.css'; // WHY ARE YOU IMPORTING THIS CSS AND NOT NAVBAR
import './navbar.css';


const styles = theme => ({
flex: {
    flex: 1,
    marginBottom: '10px',
    fontWeight:'bold',
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
},
simple: {
  marginTop: 30,
},
icon: {
  marginBottom:10,
  color: 'white'
},
search: {
  marginBottom: 0,
},
link:{
  color: 'white',
  fontSize: '1.5em',
}
});

class NavBar extends React.Component{
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
    const {flex, bar, login, simple, icon, search, link} =this.props.classes; 

return (
  <MuiThemeProvider theme={theme}>
	<div> 
		<AppBar position="static" className={bar} >
			<Toolbar>
				<IconButton className= {icon} onClick={this.handleClick}>
            	<MenuIcon /> </IconButton>
            	<Menu
          			className={simple}
          			anchorEl={anchorEl}
          			open={Boolean(anchorEl)}
          			onClose={this.handleClose}>
         		 <MenuItem onClick={this.handleClose}><a href="/Company">Company</a></MenuItem> 
         		 <MenuItem onClick={this.handleClose}>My account</MenuItem>
          		<MenuItem onClick={this.handleClose}>Logout</MenuItem></Menu>
				<Typography className={flex}>
					<a href='/' className={link} >Threefa </a>
				</Typography>
        <FormGroup className="searchbar">
          <FormControl type="text" placeholder="Search" className={search}/>
        </FormGroup>{' '}
        <a href="/Login"><Button variant="raised" className={login} >Login</Button></a>
			</Toolbar>
		</AppBar>
	</div>
  </MuiThemeProvider>
	)
}
}
export default withStyles(styles)(NavBar);