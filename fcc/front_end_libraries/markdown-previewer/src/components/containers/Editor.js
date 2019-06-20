import { connect } from 'react-redux';
import Editor from '../ui/Editor';
import { createMarkDown, createHTML, edit } from '../../store/actions';

const mapStateToProps = state => ({
  markdown: state.markdown,
  editing: state.editing,
});

const mapDispatchToProps = {
  createMarkDown,
  createHTML,
  edit,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
