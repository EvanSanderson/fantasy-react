import React, {Component} from 'react';
import Player from './Player';

class ShowPlayers extends Component {
// cant have a return inside of a return! fix this
  renderPlayers = (key) => {
    console.log("rendering players")
    return <Player key={key} index={key} playerFName={this.props.players[key].fname} playerLName={this.props.players[key].lname} team={this.props.players[key].team} />
  }
  renderBlank = () => {
    return <p> Im rendering nothing! </p>
  }
  render(){
    return(
      <div>
        {Object.keys(this.props.players).map(this.renderPlayers)}
        </div>
    )
  }
}

export default ShowPlayers;
