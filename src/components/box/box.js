import React from 'react';
import PropTypes from 'prop-types';
import { Container, AnimatedContainer } from './box.css';

const Box = ({ children, section }) => (
  <Container section={section}>
    <AnimatedContainer>{children}</AnimatedContainer>
  </Container>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
