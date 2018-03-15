import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';

const AppContainer = styled.div`
  text-align: center;
  .App-intro {
    font-size: large;
  }
`;

const App = () => (
  <AppContainer>
    <Header />
    <p className="App-intro">Rock &amp; Roll</p>
  </AppContainer>
);

export default App;
