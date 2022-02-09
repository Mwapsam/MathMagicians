import React from 'react';
import PropTypes from 'prop-types';

class CalcButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { text } = this.props;
    return (
      <button type="button" className="calc-buttons">
        {text}
      </button>
    );
  }
}

CalcButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CalcButton;
