
export const constants = {
  FETCH_CATEGORIES : 'FETCH_CATEGORIES',
  RECEIVED_CATEGORIES : 'RECEIVED_CATEGORIES',
  FETCH_QUOTE : 'FETCH_QUOTE',
  RECEIVED_QUOTE : 'RECEIVED_QUOTE',
};

function fetchCategories() {
  return ({
    type: constants.FETCH_CATEGORIES
  });
}

function receivedCategories(categories) {
  return ({
    type: constants.RECEIVED_CATEGORIES,
    payload: categories
  });
}

export function getCategories(url) {
  return (dispatch) => {
    dispatch(fetchCategories());
    return fetch(url)
      .then(resp => resp.json())
      .then(json => json.contents.categories)
      .then(obj => Object.keys(obj))
      .then(categories => {
        // console.log(categories);
        dispatch(receivedCategories(categories))
      })
      .catch(error => console.log(`getCategories error: ${error}`));
  }
}

function fetchQuote() {
  return {
    type: constants.FETCH_QUOTE
  };
}

function receivedQuote(quote) {
  return {
    type: constants.RECEIVED_QUOTE,
    payload: quote
  };
}

export function getQuote(url = 'http://quotes.rest/qod.json') {
  return (dispatch) => {
    dispatch(fetchQuote());
    return fetch(url)
      .then(resp => resp.json())
      .then(json => json.contents.quotes[0])
      .then(quote => {
        // console.log(quote);
        dispatch(receivedQuote(quote))
      })
      .catch(error => console.log(`getQuote error: ${error}`));
  }
}