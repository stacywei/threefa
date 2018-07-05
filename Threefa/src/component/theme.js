import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
  	primary: {
  		light: "#534bae",
  		main:"#1a237e",
  	},
  	secondary: {
  		light: "#48a999",
  	 	main: "#00796b",
  	}
  },
  overrides: {
  	MuiMenuItem: {
  		root: {
  			'&:hover': {
          		color: "#4caf50",
          		background: 'transparent',
        	}
  		}
  	}
  },
})