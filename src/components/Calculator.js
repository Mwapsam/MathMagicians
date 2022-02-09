import React from 'react';
import CalcButton from './CalcButton';
import calculate from '../logic/Calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calcObj: {},
    };
    this.handleCalculate = this.handleCalculate.bind(this);
  }

  handleCalculate(calcObj, text) {
    this.setState({ calcObj: calculate(calcObj, text) });
  }

  render() {
    const { calcObj } = this.state;

    let screen = '0';
    if (
      Object.keys(calcObj).length === 0
      || (calcObj.total === null
        && calcObj.next === null
        && calcObj.operation === null)
    ) {
      screen = '0';
    } else {
      screen = calcObj.next != null ? calcObj.next : calcObj.total;
    }

    return (
      <div className="calc-body">
        <div className="calc-screen">{screen}</div>
        <div className="keyboard">
          <div className="key-digits">
            <CalcButton
              text="AC"
              onClick={this.handleCalculate}
              mathObj={calcObj}
            />
            <CalcButton
              text="+/-"
              onClick={this.handleCalculate}
              mathObj={calcObj}
            />
            <CalcButton
              text="%"
              onClick={this.handleCalculate}
              mathObj={calcObj}
            />
            <CalcButton
              text="7"
              onClick={this.handleCalculate}
              mathObj={calcObj}
            />
            <CalcButton
              text="8"
              onClick={this.handleCalculate}
              mathObj={calcObj}
            />
            <CalcButton
              text="9"
              onClick={this.handleCalculate}
              mathObj={calcObj}
            />
            <CalcButton
              text="4"
              onClick={this.handleCalculate}
              mathObj={calcObj}
            />
            <CalcButton
              text="5"
              onClick={this.handleCalculate}
              mathObj={calcObj}
            />
            <CalcButton
              text="6"
              onClick={this.handleCalculate}
              mathObj={calcObj}
            />
            <CalcButton
              text="1"
              onClick={this.handleCalculate}
              mathObj={calcObj}
            />
            <CalcButton
              text="2"
              onClick={this.handleCalculate}
              mathObj={calcObj}
            />
            <CalcButton
              text="3"
              onClick={this.handleCalculate}
              mathObj={calcObj}
            />
            <CalcButton
              text="0"
              onClick={this.handleCalculate}
              mathObj={calcObj}
            />
            <div className="key-dot">
              <CalcButton
                text="."
                onClick={this.handleCalculate}
                mathObj={calcObj}
              />
            </div>
          </div>
          <div className="operators">
            <CalcButton
              text="÷"
              onClick={this.handleCalculate}
              mathObj={calcObj}
            />
            <CalcButton
              text="x"
              onClick={this.handleCalculate}
              mathObj={calcObj}
            />
            <CalcButton
              text="-"
              onClick={this.handleCalculate}
              mathObj={calcObj}
            />
            <CalcButton
              text="+"
              onClick={this.handleCalculate}
              mathObj={calcObj}
            />
            <CalcButton
              text="="
              onClick={this.handleCalculate}
              mathObj={calcObj}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
