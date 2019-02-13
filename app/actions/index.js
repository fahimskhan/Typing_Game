import * as types from './types';

export const charAdded = (letter) => {
  return {
    type: 'CHAR_ADDED',
    letter,
  };
};

export const newWord = () => {
  return {
    type: 'NEXT_WORD',
  };
};

export const startGame = () => {
  return {
    type: 'START_GAME',
  };
};

export const decrementTimer = () => {
  return {
    type: 'DECREMENT_TIMER',
  };
};

export const endGame = () => {
  return {
    type: 'END_GAME',
  };
};
