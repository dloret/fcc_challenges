import { combineReducers } from 'redux';
import { constants as c } from './constants';

const initialState = {
  currentOperation: [],
  typingOperator: false,
  result: 0,
};

function updateTypingOperator(state = false, action) {
  switch (action.type) {
    case c.ADD_OPERAND:
      return !state;
    case c.ADD_OPERATOR:
      return !state;
    default: return state;
  }

}

function updateOperand(state = [], action) {
  switch (action.type) {
    case c.ADD_OPERAND:
      const num = parseFloat(action.payload);
      return [...state, num];
    default:
      return state;
  }
}

function updateOperator
