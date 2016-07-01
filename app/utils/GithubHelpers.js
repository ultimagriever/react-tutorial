var axios = require('axios');

var id = "4a7faf8daad5e375f96e";
var sec = "ed278f1ae47279243f4724a6794dd42b857122f4";

var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param);
}

var helpers = {
  getPlayersInfo: function(players) {
    return axios.all(players.map(function(username) {
      return getUserInfo(username);
    })).then(function(info) {
      return info.map(function(user) {
        return user.data;
      });
    }).catch(function(err) {
      console.warn('Error in getPlayersInfo', err);
    });
  }
};

module.exports = helpers;