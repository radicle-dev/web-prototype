import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FloatingCard, CardHeader, SecondaryButton, Select, PrimaryButton } from '../elements';
import SourceListHeader from './SourceListHeader';
import SourceListItem from './SourceListItem';

const RepoSource = ({ repo }) => (
  <Fragment>
    {repo && (
      <FloatingCard>
        <CardHeader>
          <Select>master</Select>
          <div>
            <SecondaryButton marginRight>Open in workspace</SecondaryButton>
            <PrimaryButton>Clone</PrimaryButton>
          </div>
        </CardHeader>
        <SourceBrowser>
          <SourceListHeader />
          {repo.object.entries
            .sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase())
            .sort((a, b) => a.type.toLowerCase() < b.type.toLowerCase())
            .map(file => (
              <SourceListItem key={file.name} {...file} repo={repo.name} />
            ))}
        </SourceBrowser>
      </FloatingCard>
    )}
  </Fragment>
);

RepoSource.propTypes = {
  repo: PropTypes.object.isRequired,
};
const SourceBrowser = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 36px 48px;
  margin: 0 auto;
  max-width: 100%;
  padding-bottom: 12px;
`;

export default RepoSource;
