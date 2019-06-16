import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import marked from 'marked';

import App from './components/ui/App';
import globalReducer from './store/reducers';
import './styles/index.scss';
import * as serviceWorker from './serviceWorker';

const initialState = {
  markdown:
    '# title\n## subtitle\n\nparagraph with __bolded__ text ' +
    'and a [link to FreeCodeCamp](/https://www.freecodecamp.org/)!\n' +
    '```\nHere is a code block.\nOn two lines\n```\nHere is `inline code`.' +
      'test',
};

initialState.html = `${marked(initialState.markdown)}`;

const store = createStore(globalReducer, initialState);

store.subscribe(() => console.log(store.getState()));

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
