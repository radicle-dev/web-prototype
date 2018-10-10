import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BigHeader, FloatingCard, CardHeader, Filter, PrimaryButton } from '../elements';

import RepoListHeader from './RepoListHeader';
import RepoListItem from './RepoListItem';

const OrgSource = ({ repos }) => (
  <FloatingCard>
    <CardHeader>
      <BigHeader>Repositories</BigHeader>
      <div>
        <Filter margin value="Filter" readOnly />
        <PrimaryButton>New repository</PrimaryButton>
      </div>
    </CardHeader>
    {repos && (
      <RepoGridContainer>
        <RepoListHeader />
        {repos.map(repo => (
          <RepoListItem key={repo.id} {...repo} />
        ))}
      </RepoGridContainer>
    )}
  </FloatingCard>
);
OrgSource.propTypes = {
  repos: PropTypes.array.isRequired,
};

const RepoGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 36px 48px;
  margin: 0 auto;
  max-width: 100%;
  padding-bottom: 12px;
`;

export default OrgSource;
