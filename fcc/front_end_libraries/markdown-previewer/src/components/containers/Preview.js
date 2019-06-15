import { connect } from 'react-redux';
import { createHTML } from '../../store/actions';
import Preview from '../ui/Preview';

const mapStateToProps = state => ({
  html: state.html,
});

const mapDispatchToProps = {
  createHTML,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Preview);
