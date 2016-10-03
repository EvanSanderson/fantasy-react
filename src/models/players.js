import axios from 'axios';

function PlayerModel(){}

PlayerModel.searchByPosition = function(position){
  var request = axios.get(`http://www.fantasyfootballnerd.com/service/players/json/c8gby8vwhxtx/${position}`);
  return request;
}

export default PlayerModel;
