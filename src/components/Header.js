import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.svg';

const HeaderContainer = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;

  .App-logo {
    animation: App-logo-spin infinite 20s linear;
    height: 80px;
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  > h1 {
    font-size: 1.5em;
  }
`;

const Header = () => (
  <HeaderContainer>
    <img src={logo} className="App-logo" alt="logo" />
    <h1>Welcome to React</h1>
  </HeaderContainer>
);

export default Header;
