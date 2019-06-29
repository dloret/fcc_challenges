import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import globalReducer from './store/reducers';
import App from './components/ui/App';
import './style/index.scss';
import * as serviceWorker from './serviceWorker';

import { addInteger, addDot, addOperator, getResult } from './store/actions';

const initialState = {
  currentOperation: [],
  typingOperator: false,
  hasDot: false,
  result: 0,
};

const store = createStore(
  globalReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => console.log(store.getState()));
store.dispatch(addInteger(0));
store.dispatch(addInteger(0));
store.dispatch(addDot('.'));
store.dispatch(addInteger(6));
store.dispatch(addOperator('x'));
store.dispatch(addInteger(0));
store.dispatch(addInteger(0));
store.dispatch(addInteger(0));
store.dispatch(addInteger(1));
store.dispatch(addInteger(0));
store.dispatch(addInteger(9));
store.dispatch(addDot('.'));
store.dispatch(addDot('.'));
store.dispatch(addInteger(0));
store.dispatch(addInteger(3));
store.dispatch(addInteger(0));
store.dispatch(addInteger(0));
store.dispatch(addInteger(0));
store.dispatch(addDot('.'));
store.dispatch(addOperator('+'));
store.dispatch(addOperator('-'));
store.dispatch(addInteger(0));
store.dispatch(addInteger(0));
store.dispatch(addInteger(0));
store.dispatch(addDot('.'));
store.dispatch(addInteger(0));
store.dispatch(addInteger(2));
store.dispatch(addInteger(0));
store.dispatch(addInteger(0));
store.dispatch(addInteger(5));
store.dispatch(addInteger(0));
store.dispatch(addInteger(0));
store.dispatch(getResult());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
