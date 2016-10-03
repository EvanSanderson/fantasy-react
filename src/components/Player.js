import React, {Component} from 'react';
import LikeButton from './LikeButton';

class Player extends Component {
  constructor(){
    super();
    this.state = {
      likes: 0
    }
  }
  increment = () => {
    console.log("clicked in Player")
    let numOfLikes = this.state.likes
    numOfLikes += 1
    this.setState({
      likes: numOfLikes
    })
  }
  render(){
    return(
      <div>
        {console.log(this.props.playerFName)}
        <div> {this.props.playerFName} {this.props.playerLName} - {this.props.team} - <LikeButton increment={this.increment} /></div>
        {this.state.likes}
      </div>
    )
  }
}

export default Player;
