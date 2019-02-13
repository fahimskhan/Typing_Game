import React from 'react';

class InfoBar extends React.Component {
  render() {
    return (
      <div>
        <span className="timer">Timer: {this.props.timeLeft}</span>
        <span className="score">Score: {this.props.totalScore}</span>
    </div>
    )
  }
}

export default InfoBar;
