
export const constants = {
  FETCH_CATEGORIES : 'FETCH_CATEGORIES',
  RECEIVED_CATEGORIES : 'RECEIVED_CATEGORIES',
  FETCH_QUOTE : 'FETCH_QUOTE',
  RECEIVED_QUOTE : 'RECEIVED_QUOTE',
};

function fetchCategories() {
  return {
    type: constants.FETCH_CATEGORIES
  };
}

function receivedCategories(categories) {
  return {
    type: constants.RECEIVED_CATEGORIES,
    payload: categories
  }
}

export async function getCategories(url) {
  return (dispatch) => {
    dispatch(fetchCategories());
    fetch(url)
      .then(resp => resp.json())
      .then(json => json.contents.categories)
      .then(obj => Object.keys(obj))
      .then(categories => dispatch(receivedCategories(categories)))
      .catch(error => console.log(`getCategories error: ${error}`));
  }
}

export function fetchQuote() {
  return {
    type: constants.FETCH_QUOTE
  };
}

export function receivedQuote(quote) {
  return {
    type: constants.RECEIVED_QUOTE,
    payload: quote
  };
}
