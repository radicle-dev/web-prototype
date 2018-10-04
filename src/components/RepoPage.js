import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, FloatingCard, CardHeader, SecondaryButton, Select, PrimaryButton } from '../Elements';
import SourceListHeader from './SourceListHeader';
import SourceListItem from './SourceListItem';
import RepoOverview from './RepoOverview';

const RepoPage = ({ data, match }) => {
  const repo = data.repos.filter(repoItem => repoItem.name === match.params.repoId)[0];
  return (
    <Layout>
      <RepoOverview {...repo} />
      <FloatingCard>
        <CardHeader>
          <Select>master</Select>
          <div>
            <SecondaryButton margin>Open in workspace</SecondaryButton>
            <PrimaryButton>Clone</PrimaryButton>
          </div>
        </CardHeader>
        <SourceBrowser>
          <SourceListHeader />
          {repo.content.map(file => (
            <SourceListItem key={file.name} {...file} />
          ))}
        </SourceBrowser>
      </FloatingCard>
    </Layout>
  );
};

RepoPage.propTypes = {
  match: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

const SourceBrowser = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 36px 48px;
  margin: 0 auto;
  max-width: 100%;
  padding-bottom: 12px;
`;

export default RepoPage;
