import { connect } from 'react-redux';

import Keyboard from '../ui/Keyboard';
import {
  addDot,
  addInteger,
  addOperator,
  getResult,
  clearResult,
} from '../../store/actions';

const mapDispatchToProps = {
  addOperator,
  addInteger,
  addDot,
  getResult,
  clearResult,
};

export default connect(
  null,
  mapDispatchToProps,
)(Keyboard);
