import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import globalReducer from './store/reducers';
import { createMarkDown, createHTML } from './store/actions';
import './styles/index.scss';
import * as serviceWorker from './serviceWorker';

const store = createStore(globalReducer, {
  markdown: '',
  html: '',
});

store.subscribe(() => console.log(store.getState()));
store.dispatch(createMarkDown('# This is a title\nAnd this is **bold text**'));
store.dispatch(createHTML(store.getState().markdown));

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
