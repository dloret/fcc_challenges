import { constants as c } from './constants';

export function addOperator(payload) {
  return {
    type: c.ADD_OPERATOR,
    payload,
  };
}

export function addInteger(payload) {
  return {
    type: c.ADD_INTEGER,
    payload,
  };
}

export function addDot(payload) {
  return {
    type: c.ADD_DOT,
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
