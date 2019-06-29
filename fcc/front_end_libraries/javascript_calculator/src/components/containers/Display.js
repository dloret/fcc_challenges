import { connect } from 'react-redux';
import Display from '../ui/Display';

const mapStateToProps = state => ({
  currentOperation: state.currentOperation,
  result: state.result,
});

export default connect(
  mapStateToProps,
  null,
)(Display);
