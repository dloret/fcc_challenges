import { combineReducers } from 'redux';
import { constants as c } from './actions';

const initialState = {
  quote: '',
  categories: []
};

const categoriesReducer = (state = initialState.categories, action) => {
  switch (action.type) {
    case c.FETCH_CATEGORIES: return [...state, ...action.payload];
    default: return state;
  }
};

const quoteReducer = (state = initialState.quote, action) => {
  switch (action.type) {
    case c.FETCH_QUOTE: return action.payload;
    default: return state;
  }
};

const globalReducer = combineReducers({
  categoriesReducer,
  quoteReducer
});

export default globalReducer;
