import React, { Component } from 'react';
import Calculator from './Calculator';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Calculator />
      </div>
    );
  }
}
