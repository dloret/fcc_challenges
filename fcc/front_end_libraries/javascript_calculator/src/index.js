import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { globalReducer } from './store/reducers';
import App from './components/ui/App';
import './style/index.scss';
import * as serviceWorker from './serviceWorker';

const initialState = {
  currentOperation: [],
  typingOperator: false,
  result: 0,
};

const store = createStore(globalReducer, initialState);

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
