import React, { Component } from 'react';
import styled from 'styled-components';
import RepoListHeader from './Components/RepoListHeader';
import RepoListItem from './Components/RepoListItem';
import { Layout, ProjectHeader } from './Elements';

const url = 'http://localhost:5678/';

class App extends Component {
  state = {
    title: 'oscoin',
    data: null,
  };

  componentDidMount() {
    this.fetchRepos();
  }

  async fetchRepos() {
    await (await fetch(url)).json().then(data => {
      this.setState({ data });
      console.log(this.state.data);
    });
  }

  render() {
    const { data, title } = this.state;
    return (
      <Layout>
        <ProjectHeader>
          <h1>{title}</h1>
        </ProjectHeader>
        {data && (
          <GridContainer>
            <RepoListHeader />
            {data.repos.map(repo => <RepoListItem key={repo.id} {...repo} />)}
          </GridContainer>
        )}
      </Layout>
    );
  }
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 56px;
  margin: 0 auto;
  max-width: 100%;
`;

export default App;
