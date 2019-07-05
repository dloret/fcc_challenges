import React from 'react';
import '../../style/Keyboard.scss';

const Keyboard = ({
  addDot,
  addInteger,
  addOperator,
  getResult,
  clearResult,
}) => {
  function handleClick(e) {
    e.preventDefault();
    const val = e.target.value;

    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(val)) {
      addInteger(val);
    }
    if (val === '.') {
      addDot(val);
    }
    if (['+', '-', 'x', '/'].includes(val)) {
      addOperator(val);
    }
    if (val === '=') {
      getResult();
    }
    if (val === 'AC') {
      clearResult();
    }
  }

  return (
    <section id="keyboard">
      <button type="button" id="clear" value={'AC'} onClick={handleClick}>
        AC
      </button>
      <button type="button" id="divide" value={'/'} onClick={handleClick}>
        /
      </button>
      <button type="button" id="seven" value={7} onClick={handleClick}>
        7
      </button>
      <button type="button" id="eight" value={8} onClick={handleClick}>
        8
      </button>
      <button type="button" id="nine" value={9} onClick={handleClick}>
        9
      </button>
      <button type="button" id="multiply" value={'x'} onClick={handleClick}>
        x
      </button>
      <button type="button" id="four" value={4} onClick={handleClick}>
        4
      </button>
      <button type="button" id="five" value={5} onClick={handleClick}>
        5
      </button>
      <button type="button" id="six" value={6} onClick={handleClick}>
        6
      </button>
      <button type="button" id="subtract" value={'-'} onClick={handleClick}>
        -
      </button>
      <button type="button" id="one" value={1} onClick={handleClick}>
        1
      </button>
      <button type="button" id="two" value={2} onClick={handleClick}>
        2
      </button>
      <button type="button" id="three" value={3} onClick={handleClick}>
        3
      </button>
      <button type="button" id="add" value={'+'} onClick={handleClick}>
        +
      </button>
      <button type="button" id="zero" value={0} onClick={handleClick}>
        0
      </button>
      <button type="button" id="decimal" value={'.'} onClick={handleClick}>
        .
      </button>
      <button type="button" id="equals" value={'='} onClick={handleClick}>
        =
      </button>
    </section>
  );
};

export default Keyboard;
