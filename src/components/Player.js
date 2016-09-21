import React, {Component} from 'react';

class Player extends Component {
  render(){
    return(
      <div>
        <p> WORKING </p>
        <p> {this.props.playerFName} {this.props.playerLName} </p>
      </div>
    )
  }
}

export default Player;
