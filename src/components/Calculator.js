import React, { useState } from 'react';
import CalcButton from './CalcButton';
import calculate from '../logic/Calculate';

const Calculator = () => {
  const [calcObj, setState] = useState({});

  const handleCalculate = (calcObj, text) => {
    setState(calculate(calcObj, text));
  };

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
          <CalcButton text="AC" onClick={handleCalculate} mathObj={calcObj} />
          <CalcButton text="+/-" onClick={handleCalculate} mathObj={calcObj} />
          <CalcButton text="%" onClick={handleCalculate} mathObj={calcObj} />
          <CalcButton text="7" onClick={handleCalculate} mathObj={calcObj} />
          <CalcButton text="8" onClick={handleCalculate} mathObj={calcObj} />
          <CalcButton text="9" onClick={handleCalculate} mathObj={calcObj} />
          <CalcButton text="4" onClick={handleCalculate} mathObj={calcObj} />
          <CalcButton text="5" onClick={handleCalculate} mathObj={calcObj} />
          <CalcButton text="6" onClick={handleCalculate} mathObj={calcObj} />
          <CalcButton text="1" onClick={handleCalculate} mathObj={calcObj} />
          <CalcButton text="2" onClick={handleCalculate} mathObj={calcObj} />
          <CalcButton text="3" onClick={handleCalculate} mathObj={calcObj} />
          <CalcButton text="0" onClick={handleCalculate} mathObj={calcObj} />
          <div className="key-dot">
            <CalcButton text="." onClick={handleCalculate} mathObj={calcObj} />
          </div>
        </div>
        <div className="operators">
          <CalcButton text="÷" onClick={handleCalculate} mathObj={calcObj} />
          <CalcButton text="x" onClick={handleCalculate} mathObj={calcObj} />
          <CalcButton text="-" onClick={handleCalculate} mathObj={calcObj} />
          <CalcButton text="+" onClick={handleCalculate} mathObj={calcObj} />
          <CalcButton text="=" onClick={handleCalculate} mathObj={calcObj} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
