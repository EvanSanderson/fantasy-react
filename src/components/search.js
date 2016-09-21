import React, {Component} from 'react';

class Search extends Component {
search = (e)=>{
  e.preventDefault();
  var position = this.refs.position.value;
  var playerName = this.refs.playerName.value;
  console.log(position);
  this.props.searchPlayer(position, playerName);
}
  render(){
    return(
      <form onSubmit={(e)=> this.search(e)}>
          <input
            placeholder="Search by position"
            ref="position" />
            <input
              placeholder="Search by player name"
              ref="playerName" />
          <button type="submit"> Search </button>
      </form>
    )
  }
}

export default Search;
