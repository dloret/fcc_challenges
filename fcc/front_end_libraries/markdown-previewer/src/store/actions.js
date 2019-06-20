const actions = {
  WRITE_MARKDOWN: 'WRITE_MARKDOWN',
  RENDER_HTML: 'RENDER_HTML',
  IS_EDITING: 'IS_EDITING',
};

export function createMarkDown(payload) {
  return {
    type: actions.WRITE_MARKDOWN,
    payload,
  };
}

export function createHTML(payload) {
  return {
    type: actions.RENDER_HTML,
    payload,
  };
}

export function edit(payload) {
  return {
    type: actions.IS_EDITING,
    payload,
  };
}

export default actions;
