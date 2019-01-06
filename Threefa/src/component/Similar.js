import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import similarData from './SimilarData';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 200,
    height: 450,
    position:"absolute",
    left:"83%",
  },
  button: {
    color: 'white' 
  },
  header:{
    fontSize:"18px"  
  },
});


function Similar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={150} cols={1} className={classes.gridList}>
        <GridListTile key="Subheader" >
          <ListSubheader component="div" className={classes.header}>Similar Projects</ListSubheader>
        </GridListTile>
        {similarData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>Description: {tile.about}</span>}
              actionIcon={
                <Button className={classes.button}>LEARN MORE </Button>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

Similar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Similar);