import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from './components/Layout';
import RepoListHeader from './components/RepoListHeader';
import RepoListItem from './components/RepoListItem';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 56px;
  margin: 0 auto;
  max-width: 100%;
`;
const ProjectHeader = styled.div`
  padding: 16px;
  margin: 48px auto 24px;
  max-width: 100%;
  > h1 {
    color: #010101;
    font-size: 42px;
    font-weight: bold;
  }
`;

const url = 'http://localhost:5678/repos';

class App extends Component {
  state = {
    title: 'oscoin',
    repos: null,
  };

  componentDidMount() {
    this.fetchRepos();
  }

  async fetchRepos() {
    await (await fetch(url)).json().then(data => {
      console.log(data);

      this.setState({ repos: data });
    });
  }

  render() {
    const { repos, title } = this.state;
    return (
      <Layout>
        <ProjectHeader>
          <h1>{title}</h1>
        </ProjectHeader>
        {repos && (
          <GridContainer>
            <RepoListHeader />
            {repos.map(repo => <RepoListItem key={repo.id} {...repo} />)}
          </GridContainer>
        )}
      </Layout>
    );
  }
}

export default App;
