import { constants as c } from './constants';

export function addOperand(payload) {
  return {
    type: c.ADD_OPERAND,
    payload,
  };
}

export function addOperator(payload) {
  return {
    type: c.ADD_OPERATOR,
    payload,
  };
}

export function getResult() {
  return {
    type: c.GET_RESULT,
  };
}

export function clearResult() {
  return {
    type: c.CLEAR_RESULT,
  };
}
