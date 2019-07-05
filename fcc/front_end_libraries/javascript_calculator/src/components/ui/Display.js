import React from 'react';
import cleanUpZeros from '../../helpers';
import '../../style/Display.scss';

const Display = ({ currentOperation, result }) => {
  return (
    <section id="display">
      {currentOperation.length > 0 ? cleanUpZeros(currentOperation) : result}
    </section>
  );
};

export default Display;
