import React, { Component } from 'react';
import PlayerModel from './models/players';
import Search from './components/search';
import ShowPlayers from './components/showPlayers';

class App extends Component {
  constructor(){
    super();
    this.state = {
      players: [],
      viewPlayers: false
    }
  }
  searchPlayer = (position, playerName) => {
    var players = []
    PlayerModel.searchByPosition(position).then((res)=> {
      var foundPlayers = res.data.Players
      console.log(foundPlayers)
      foundPlayers.forEach(function(value){
        if(value.lname == playerName){
          players.push(value)
        }
      })
      console.log(players)
      this.setState({
        players: players,
        viewPlayers: true
      })
    })
  }

  render() {
    return (
      <div>
      <p> Hi there! </p>

      <Search
      searchPlayer={this.searchPlayer}/>

      <ShowPlayers
        players={this.state.players}
        viewPlayers={this.state.viewPlayers}/>

      </div>
    );
  }
}

export default App;
