var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var Link = require('react-router').Link;

var MainWrapper = require('./MainWrapper');

var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var Loading = require('./Loading');

function StartOverButton () {
  return (
    <div className='col-sm-12' style={styles.space}>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
      </Link>
    </div>
  );
}

function Results (props) {
  if (props.isLoading === true) {
    return (
      <Loading speed={100} text="One moment" />
    );
  }

  if (props.scores[0] === props.scores[1]) {
    return (
      <MainWrapper>
        <h1>It's a tiiiiie! Now share it with friends.</h1>
        <StartOverButton />
      </MainWrapper>
    );
  }

  var winner = props.scores[0] > props.scores[1] ? 0 : 1;
  var loser = winner === 0 ? 1 : 0;
  return (
    <MainWrapper>
      <h1>Results</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Winner'>
          <UserDetails info={props.playersInfo[winner]} score={props.scores[winner]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails info={props.playersInfo[loser]} score={props.scores[loser]} />
        </UserDetailsWrapper>
      </div>
      <StartOverButton />
    </MainWrapper>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = Results;