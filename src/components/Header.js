import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 64px;
  color: white;
  border-radius: 3px;
  padding-left: 24px;
  > h1 {
    font-size: 1.5em;
    font-weight: bold;
  }
`;
const Circle = styled.header`
  font-size: 6em; /* This controls the size. */
  display: inline-block;
  width: 0.4em;
  height: 0.4em;
  border: 0.05em solid white;
  position: relative;
  border-radius: 3em;
`;

const Header = props => (
  <HeaderContainer>
    <Circle />
    <h1>{props.title}</h1>
  </HeaderContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
