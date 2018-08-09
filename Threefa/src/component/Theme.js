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
          		color: "green",
          		background: 'transparent',
        	}
  		}
  	},
    MuiTypography: {
      root: {
        '&:hover': {
          color: "white",
        }
      }
    }
  },
})
