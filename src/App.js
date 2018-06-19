import React, { Component } from 'react';
import styled from 'styled-components';
import AppHeader from './components/AppHeader';
import RepoListItem from './components/RepoListItem';

const AppContainer = styled.div`
  color: #010101;
  font-family: Arial, Helvetica, sans-serif;
  margin: 16px auto;
  max-width: 960px;
  overflow: auto;
`;
const GridContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr;
  grid-template-rows: 42px 56px;
`;
const ProjectHeader = styled.div`
  margin: 48px 0 24px;
  padding: 24px;
  > h1 {
    color: white;
    font-size: 42px;
    font-weight: bold;
  }
`;

const url = 'http://localhost:5678';

class App extends Component {
  state = {
    title: 'oscoin',
    repos: null,
  };

  componentDidMount() {
    this.fetchCoins();
  }

  async fetchCoins() {
    await (await fetch(url)).json().then(data => {
      console.log(data);

      this.setState({ repos: data });
    });
  }

  render() {
    const { repos, title } = this.state;
    return (
      <AppContainer>
        <AppHeader />
        <ProjectHeader>
          <h1>{title}</h1>
        </ProjectHeader>
        {repos && (
          <GridContainer>
            <RepoListItem topStyle />
            {repos.map(repo => <RepoListItem key={repo.id} {...repo} />)}
          </GridContainer>
        )}
      </AppContainer>
    );
  }
}

export default App;
