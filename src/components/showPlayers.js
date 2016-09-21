import React, {Component} from 'react';
import Player from './Player';

class ShowPlayers extends Component {
// cant have a return inside of a return! fix this
  renderPlayers = () => {
    console.log(this.props.players);
    this.props.players.map((player)=>{
      console.log(player.lname);
      console.log(player.fname);
      return (
        <div>
        <p> it is rendering plaers </p>
        <Player
        playerLName = {player.lname}
        playerFName = {player.fname}
        />
        </div>
      )
    })
  }
  renderBlank = () => {
    return <p> Im rendering nothing! </p>
  }
  render(){
    return(
      <div>
        {this.props.viewPlayers ? this.renderPlayers() : this.renderBlank() }
      </div>
    )
  }
}

export default ShowPlayers;
