import { connect } from 'react-redux';
import Display from '../ui/Display';

const mapStateToProps = state => ({
  typingOperator: state.typingOperator,
  currentOperation: state.currentOperation,
});

const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Display);
