import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [currentCalc, setcalc] = useState({
    next: '',
    total: 0,
    operation: '',
  });
  const { next, total, operation } = currentCalc;
  const handleClick = (e) => {
    e.preventDefault();
    setcalc((state) => calculate({
      next: state.next,
      total: state.total,
      operation: state.operation,
    },
    e.target.innerHTML));
  };

  return (
    <>
      <h2>Lets do some math!</h2>
      <div className="calc-wrap">
        <div id="input">
          {total}
          {' '}
          {operation}
          {' '}
          {next}
        </div>
        <div id="row1">
          <button type="button" className="op" onClick={handleClick}>AC</button>
          <button type="button" className="op" onClick={handleClick}>+/-</button>
          <button type="button" className="op" onClick={handleClick}>%</button>
          <button type="button" className="operator" onClick={handleClick}>÷</button>
        </div>
        <div id="row2">
          <button type="button" className="number" id="7" onClick={handleClick}>7</button>
          <button type="button" className="number" id="8" onClick={handleClick}>8</button>
          <button type="button" className="number" id="9" onClick={handleClick}>9</button>
          <button type="button" className="operator" onClick={handleClick}>x</button>
        </div>
        <div id="row3">
          <button type="button" className="number" id="4" onClick={handleClick}>4</button>
          <button type="button" className="number" id="5" onClick={handleClick}>5</button>
          <button type="button" className="number" id="6" onClick={handleClick}>6</button>
          <button type="button" className="operator" onClick={handleClick}>-</button>
        </div>

        <div id="row4">
          <button type="button" className="number" id="1" onClick={handleClick}>1</button>
          <button type="button" className="number" id="2" onClick={handleClick}>2</button>
          <button type="button" className="number" id="3" onClick={handleClick}>3</button>
          <button type="button" className="operator" onClick={handleClick}>+</button>
        </div>
        <div id="row5">
          <button type="button" id="n0" onClick={handleClick}>0</button>
          <button type="button" className="number" onClick={handleClick}>.</button>
          <button className="operator" type="button" onClick={handleClick}>=</button>
        </div>
      </div>
    </>
  );
};
export default Calculator;
