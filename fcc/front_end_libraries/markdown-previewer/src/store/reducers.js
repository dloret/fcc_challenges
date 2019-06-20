import marked from 'marked';
import { combineReducers } from 'redux';
import actions from './actions';

marked.setOptions({
  gfm: true,
  breaks: true,
});

function createMarkDown(state = '', action) {
  return action.type === actions.WRITE_MARKDOWN ? action.payload : state;
}

function createHTML(state = '', action) {
  return action.type === actions.RENDER_HTML ? marked(action.payload) : state;
}

function toggleEditing(state = true, action) {
  return action.type === actions.IS_EDITING ? !action.payload : state;
}

export default combineReducers({
  markdown: createMarkDown,
  html: createHTML,
  editing: toggleEditing,
});
