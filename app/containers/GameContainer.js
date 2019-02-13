import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import InfoBar from '../components/InfoBar';
import GameOver from '../components/GameOver'
import { charAdded, newWord, startGame, decrementTimer, endGame } from '../actions/index';

class GameContainer extends React.Component {
    onInput(input) {
        // YOUR ON INPUT FUNCTION HERE
        if (this.props.currentIndex[0] === 0 && this.props.currentIndex[1] === 0) {
          this.interval = setInterval(() => { //just storing in interval inside the function's scope like this.props
            this.props.decrementTimer();
            if (this.props.timeLeft === 0) {
              this.props.endGame();
              clearInterval(this.interval);
              // this.props.startGame();
            }
          }, 1000);
        }

        let letter= String.fromCharCode(input.which);
        if (letter !== ' ') {
          this.props.charAdded(letter);
        } else {
          this.props.newWord();
        }
    }

    render() {
        return (
          <div>
            {this.props.gameOver
              ? <div>
                <GameOver totalScore={this.props.totalScore} startGame={() => this.props.startGame()}/>
              </div>
              : <div>
                <WordBox wordList={this.props.wordList}/>
                <TextBox userInput={this.props.userInput} onInput={(input) => this.onInput(input)}/>
                <InfoBar timeLeft={this.props.timeLeft} totalScore={this.props.totalScore}/>
            </div>}
          </div>

        );
    }
}

// GameContainer.propTypes = { //this is not necessary was only being used for linter
//     wordList: PropTypes.array
// };

const mapStateToProps = (state) => {
    return {
        // YOUR MAP STATE TO PROPS HERE
        wordList: state.gameReducer.wordList,
        currentIndex: state.gameReducer.currentIndex,
        userInput: state.gameReducer.userInput,
        timeLeft: state.gameReducer.timeLeft,
        totalScore: state.gameReducer.totalScore,
        gameOver: state.gameReducer.gameOver,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
        charAdded: (letter) => {
          dispatch(charAdded(letter));
        },
        newWord: () => {
          dispatch(newWord());
        },
        startGame: () => {
          dispatch(startGame());
        },
        decrementTimer: () => {
          dispatch(decrementTimer());
        },
        endGame: () => {
          dispatch(endGame());
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
