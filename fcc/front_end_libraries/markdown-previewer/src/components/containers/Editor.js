import { connect } from 'react-redux';
import Editor from '../ui/Editor';
import { createMarkDown, createHTML } from '../../store/actions';

const mapStateToProps = state => ({
  markdown: state.markdown,
});

const mapDispatchToProps = {
  createMarkDown,
  createHTML,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Editor);
