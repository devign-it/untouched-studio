import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './HomeContainer.css.js';

const HomeContainer = ({ children }) => (
  <Container>{children}</Container>
);

HomeContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeContainer;
