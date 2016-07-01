var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var GithubHelpers = require('../utils/GithubHelpers');

const ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    console.log('getInitialState');
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentWillMount: function() {
    console.log('componentWillMount');
  },
  componentDidMount: function() {
    console.log('componentDidMount');
    var query = this.props.location.query;

    GithubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function(players) {
        this.setState({
          isLoading: false,
          playersInfo: players
        });
      }.bind(this));
  },
  componentWillReceiveProps: function() {
    console.log('componentWillReceiveProps');
  },
  componentWillUnmount: function() {
    console.log('componentWillUnmount');
  },
  render: function() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo} />
    );
  }
});

module.exports = ConfirmBattleContainer;