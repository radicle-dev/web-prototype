import React, { Component } from 'react';
import styled from 'styled-components';
import AppHeader from './AppHeader';

const AppContainer = styled.div`
  background-color: #fff;
  font-family: GT America, Arial, Helvetica, sans-serif;
  overflow: auto;
`;

class Layout extends Component {
  render() {
    return (
      <AppContainer>
        <AppHeader />
        {this.props.children}
      </AppContainer>
    );
  }
}

export default Layout;
