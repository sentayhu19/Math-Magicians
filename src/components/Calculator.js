import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-wrap">
        <div className="calc-wrap">
          <input type="number" id="input" placeholder="0" />
          <div id="row1">
            <button type="button" className="op">Ac</button>
            <button type="button" className="op">+/-</button>
            <button type="button" className="op">%</button>
            <button type="button" className="operator">÷</button>
          </div>
          <div id="row2">
            <button type="button" className="number" id="7">7</button>
            <button type="button" className="number" id="8">8</button>
            <button type="button" className="number" id="9">9</button>
            <button type="button" className="operator">*</button>
          </div>
          <div id="row3">
            <button type="button" className="number" id="4">4</button>
            <button type="button" className="number" id="5">5</button>
            <button type="button" className="number" id="6">6</button>
            <button type="button" className="operator">-</button>
          </div>

          <div id="row4">
            <button type="button" className="number" id="1">1</button>
            <button type="button" className="number" id="2">2</button>
            <button type="button" className="number" id="3">3</button>
            <button type="button" className="operator">+</button>
          </div>
          <div id="row5">
            <button type="button" id="n0">0</button>
            <button className="operator" type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;
