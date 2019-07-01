import { constants as c } from './constants';
import cleanUpZeros from '../helpers';

/*const initialState = {
  currentOperation: [],
  typingOperator: false,
  hasDot: false,
  result: 0,
};*/

export default function globalReducer(state = {}, action) {
  switch (action.type) {
    case c.ADD_INTEGER:
      return {
        ...state,
        typingOperator: false,
        currentOperation: [...state.currentOperation, action.payload],
      };
    case c.ADD_DOT:
      return state.hasDot
        ? state
        : {
            ...state,
            hasDot: true,
            currentOperation: [...state.currentOperation, action.payload],
          };
    case c.ADD_OPERATOR:
      const currentOperation = state.currentOperation;
      return state.typingOperator
        ? {
            ...state,
            hasDot: false,
            typingOperator: true,
            currentOperation: [
              ...currentOperation.slice(0, currentOperation.length - 1),
              action.payload,
            ],
          }
        : {
            ...state,
            hasDot: false,
            typingOperator: true,
            currentOperation: [...state.currentOperation, action.payload],
          };
    case c.GET_RESULT:
      const operation = cleanUpZeros(state.currentOperation).replace(/x/, '*');
      // eslint-disable-next-line
      const result = eval(operation);
      return {
        ...state,
        currentOperation: [...String(result)],
        hasDot: false,
        typingOperator: false,
        result,
      };
    case c.CLEAR_RESULT:
      return {
        ...state,
        currentOperation: [],
        hasDot: false,
        typingOperator: false,
        result: 0,
      };
    default:
      return state;
  }
}
