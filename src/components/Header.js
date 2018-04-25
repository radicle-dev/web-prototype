import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 28px;
  color: white;
  border-radius: 3px;
  text-align: center;
  > h1 {
    font-size: 1.5em;
  }
`;

const Header = props => (
  <HeaderContainer>
    <h1>{props.title}</h1>
  </HeaderContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
