import React from 'react';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';

export default class LikeButton extends React.Component {
    constructor() {
      super();
      this.state = { 
          liked: false 
        };
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
      this.setState({  
          liked: !this.state.liked 
        });
    }
    
    render() {
      const label = this.state.liked ? <Favorite/> : <FavoriteBorder />;
      return <IconButton onClick={this.handleClick}>{label}</IconButton>;
    }
}


