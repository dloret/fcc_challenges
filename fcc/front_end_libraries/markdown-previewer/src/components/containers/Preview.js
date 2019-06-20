import { connect } from 'react-redux';
import { createHTML, edit } from '../../store/actions';
import Preview from '../ui/Preview';

const mapStateToProps = state => ({
  html: state.html,
  editing: state.editing,
});

const mapDispatchToProps = {
  createHTML,
  edit,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preview);
