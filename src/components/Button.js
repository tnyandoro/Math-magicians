import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/button.module.css';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends Component {
  render() {
    const { name } = this.props;
    return (
      <button type="button" className={`${styles.Calculator}`}>
        {name}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
