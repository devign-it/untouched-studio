import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './button.css.js';

const Button = ({ children, link }) => (
  <ButtonWrapper>
    <a href={link}>{children}</a>
  </ButtonWrapper>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
