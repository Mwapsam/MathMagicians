import React from 'react';
import Calculator from './Calculator';
import Footer from './Footer';

const CalcuPage = () => (
  <>
    <div className="calculate">
      <div className="calculate-text">
        <p>Hey Magicians Lets do some Cool Stuff on my Calculator</p>
      </div>
      <Calculator />
    </div>
    <Footer />
  </>
);

export default CalcuPage;
