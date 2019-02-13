import React from 'react';

class GameOver extends React.Component {
  render() {
    return (
      <div>
        <div className="gameover">
          <h3>Time's up!</h3>
          <h3>Your Score: {this.props.totalScore}</h3>
        </div>
        <button className="playagain" onClick={() => this.props.startGame()}>Play again!</button>
    </div>
    )
  }
}

export default GameOver;
