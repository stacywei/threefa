import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography'
import foodData from './FaveData.js'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    margin: '10px',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',

  },
  title: {
    fontSize:20,
    textDecoration: 'underline',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
  },
  img:{
    width: '100%',
    height:'100%',
  },
})
function Fave(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
    <Typography variant='subheading'> <h3> Restaurants we love </h3> </Typography>
      <GridList className={classes.gridList} cols={3}>
        {foodData.map(tile => (
          <GridListTile key={tile.img}>
            <a href='./Company'><img src={tile.img} alt={tile.title} className={classes.img}/> </a>
            <GridListTileBar
              title={tile.title}
              subtitle={<span>{tile.about}</span>} 
              classes={{
                title: classes.title,
                subtitle: classes.subtitle,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

Fave.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Fave);
