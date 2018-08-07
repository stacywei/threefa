import React from 'react';
import Navbar from './Navbar';
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles';
const styles = ({
	container: {
		textAlign: 'center',
	},
	title:{
		fontSize: '30px',
		fontWeight: 'bold',
		color: '#000080',
	},
	p: {
		marginLeft: 0,
		margin: 10,
		fontSize:'15px',
		fontFamily: 'Verdana',
		width: '50%',
	},
	image: {
		float: 'right',
		height: '400px',
		marginRight: '20px'
	},
})

class About extends React.Component {
	render() {
		const {container, title,p, image} =this.props.classes;
		return (
			<div>
			<Navbar/>
        	<span className={container}><h2><b> About Website Name </b></h2></span>
        	<img src="https://bit.ly/2vMzKyW" className={image}/>
        	<Typography className={title}> Our Mission </Typography>
        	<p className={p}> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        	Aenean commodo ligula eget dolor. Aenean massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        	Aenean commodo ligula eget dolor. Aenean massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        	Aenean commodo ligula eget dolor. Aenean massa. </p>
        	<Typography className={title}> How does it work </Typography>
        	<p className={p}> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        	Aenean commodo ligula eget dolor. Aenean massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        	Aenean commodo ligula eget dolor. Aenean massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        	Aenean commodo ligula eget dolor. Aenean massa. </p>
        	<Typography className={title}> Founder </Typography>
        	<p className={p}> Brief paragraph about Threefa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        	Aenean commodo ligula eget dolor. Aenean massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        	Aenean commodo ligula eget dolor.Aenean massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        	Aenean commodo ligula eget dolor.Aenean massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        	Aenean commodo ligula eget dolor. <a href="http://threefa.com/" style={{color: 'blue'}}> Learn more </a> </p>
        	</div>	
        )		
	}
}
export default withStyles (styles)(About)