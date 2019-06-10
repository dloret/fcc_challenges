const actions = {
  WRITE_MARKDOWN: 'WRITE_MARKDOWN',
  RENDER_HTML: 'RENDER_HTML',
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

export default actions;
