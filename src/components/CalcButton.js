import React from 'react';
import PropTypes from 'prop-types';

class CalcButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { text, onClick, mathObj } = this.props;
    onClick(mathObj, text);
  }

  render() {
    const { text } = this.props;
    return (
      <button type="button" className="calc-buttons" onClick={this.handleClick}>
        {text}
      </button>
    );
  }
}

CalcButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  mathObj: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default CalcButton;
