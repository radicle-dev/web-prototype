import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AppContainer = styled.div`
  color: #00001e;
  font-family: GT America;
  margin: 0 auto;
  padding: 40px;
  max-width: 960px;
  overflow: auto;
  color: white;
`;

const Header = styled.header`
  margin-bottom: 40px;
  padding: 24px;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 40px 1fr;
  background-color: #0a0c21;
  border: 1px solid #1e1f30;
  border-radius: 3px;
  color: ${props => (props.topStyle ? 'grey' : 'white')};
  > p {
    text-align: center;
  }
`;

class RepoPage extends Component {
  render() {
    return (
      <AppContainer>
        <Header>
          <Link to="/">back</Link>
          <p>{this.props.match.params.repoId}</p>
        </Header>
      </AppContainer>
    );
  }
}
export default RepoPage;
