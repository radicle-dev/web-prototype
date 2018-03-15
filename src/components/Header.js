import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #222;
  height: 28px;
  padding: 20px;
  color: white;

  > h1 {
    font-size: 1.5em;
  }
`;

const Header = props => (
  <HeaderContainer>
    <h1>Welcome to {props.title}</h1>
  </HeaderContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
