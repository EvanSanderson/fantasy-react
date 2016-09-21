import axios from 'axios';

function PlayerModel(){}

PlayerModel.searchByPosition = function(position){
  var request = axios.get(`https://www.fantasyfootballnerd.com/service/players/json/test/${position}`);
  return request;
}

export default PlayerModel;
