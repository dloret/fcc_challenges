import { combineReducers } from 'redux';
import { constants as c } from './actions';

const initialState = {
  quote: {},
  categories: []
};

const categoriesReducer = (state = initialState.categories, action) => {
  switch (action.type) {
    case c.RECEIVED_CATEGORIES: return [...state, ...action.payload];
    default: return state;
  }
};

const quoteReducer = (state = initialState.quote, action) => {
  switch (action.type) {
    case c.RECEIVED_QUOTE: return {...state, ...action.payload};
    default: return state;
  }
};

const globalReducer = combineReducers({
  categories: categoriesReducer,
  quote: quoteReducer
});

export default globalReducer;
