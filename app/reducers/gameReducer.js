import words from '../dictionary.js';
import _ from 'underscore'

const random = _.shuffle(words);
const wordList = random.slice(0, 100);

let word = [];
let list = [];
for (let i=0; i<wordList.length; i++) {
  for (let j=0; j<wordList[i].length; j++) {
    word.push({letter: wordList[i][j], status: 'pending'})
  }
  list.push(word);
  word = [];
}

const initState = {
  wordList: list,
  currentIndex: [0,0],
  userInput: '',
  timeLeft: 60,
  totalScore: 0,
  gameOver: false,
}
const gameReducer = (state = initState, action) => {
    switch(action.type) {
      case 'CHAR_ADDED':
        const caWordList = [...state.wordList];
        const caCurrentIndex = [...state.currentIndex];
        const caUserInput = state.userInput + action.letter;
        let caTotalScore;
        if (action.letter === caWordList[caCurrentIndex[0]][caCurrentIndex[1]].letter) {
          caWordList[caCurrentIndex[0]][caCurrentIndex[1]].status = 'correct';
          caTotalScore = Number(state.totalScore) + 1;
        } else {
          caWordList[caCurrentIndex[0]][caCurrentIndex[1]].status = 'incorrect'
          caTotalScore = Number(state.totalScore) - 1;
        }
        caCurrentIndex[1] = caCurrentIndex[1] + 1;
        return {
          wordList: caWordList,
          currentIndex: caCurrentIndex,
          userInput: caUserInput,
          timeLeft: state.timeLeft,
          totalScore: caTotalScore,
          gameOver: false,
        }
      case 'NEXT_WORD':
        const nwWordList = [...state.wordList];
        const nwCurrentIndex = [...state.currentIndex];
        const nwUserInput = '';
        nwCurrentIndex[0] = nwCurrentIndex[0] + 1;
        nwCurrentIndex[1] = 0;
        return {
          wordList: nwWordList,
          currentIndex: nwCurrentIndex,
          userInput: nwUserInput,
          timeLeft: state.timeLeft,
          totalScore: state.totalScore,
          gameOver: false,
        }
      case 'START_GAME':
        const newRandom = _.shuffle(words);
        const newWordList = newRandom.slice(0, 100);
        let word = [];
        let list = [];
        for (let i=0; i<newWordList.length; i++) {
          for (let j=0; j<newWordList[i].length; j++) {
            word.push({letter: newWordList[i][j], status: 'pending'})
          }
          list.push(word);
          word = [];
        }
        return {
          wordList: list,
          currentIndex: [0,0],
          userInput: '',
          timeLeft: 60,
          totalScore: 0,
          gameOver: false,
        }
      case 'DECREMENT_TIMER':
        const dtTimeLeft = Number(state.timeLeft) - 1;
        return {
          wordList: state.wordList,
          currentIndex: state.currentIndex,
          userInput: state.userInput,
          timeLeft: dtTimeLeft,
          totalScore: state.totalScore,
          gameOver: false,
        }
      case 'END_GAME':
        return {
          wordList: state.wordList,
          currentIndex: [0,0],
          userInput: '',
          timeLeft: state.timeLeft,
          totalScore: state.totalScore,
          gameOver: true,
        }
      default:
        return state;
    }
};

export default gameReducer;
