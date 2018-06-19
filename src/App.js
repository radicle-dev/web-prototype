import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import RepoListItem from './components/RepoListItem';

const AppContainer = styled.div`
  color: #010101;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 auto;
  padding: 40px;
  max-width: 960px;
  overflow: auto;
`;
const GridContainer = styled.div`
  margin-top: 40px;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr;
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
        <Header title={title} />
        <h1>{title}</h1>
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
