import React from 'react';
import CalcButton from './CalcButton';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc-body">
        <div className="calc-screen">0</div>
        <div className="keyboard">
          <div className="key-digits">
            <CalcButton text="AC" />
            <CalcButton text="+/-" />
            <CalcButton text="%" />
            <CalcButton text="7" />
            <CalcButton text="8" />
            <CalcButton text="9" />
            <CalcButton text="4" />
            <CalcButton text="5" />
            <CalcButton text="6" />
            <CalcButton text="1" />
            <CalcButton text="2" />
            <CalcButton text="3" />
            <CalcButton text="0" />
            <div className="key-dot">
              <CalcButton text="." />
            </div>
          </div>
          <div className="operators">
            <CalcButton text="÷" />
            <CalcButton text="x" />
            <CalcButton text="-" />
            <CalcButton text="+" />
            <CalcButton text="=" />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
