import React from 'react';
import styled from 'styled-components';
import RepoListHeader from './RepoListHeader';
import RepoListItem from './RepoListItem';
import { Layout, ProjectHeader } from '../Elements';

const OrgPage = props => (
  <Layout>
    <ProjectHeader>
      <h1>oscoin</h1>
    </ProjectHeader>
    {props.data && (
      <GridContainer>
        <RepoListHeader />
        {props.data.repos.map(repo => <RepoListItem key={repo.id} {...repo} />)}
      </GridContainer>
    )}
  </Layout>
);

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 56px;
  margin: 0 auto;
  max-width: 100%;
`;

export default OrgPage;
