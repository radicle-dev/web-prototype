import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FloatingCard, CardHeader, Select, Filter } from '../elements';
import CommitListItem from './CommitListItem';

const RepoCommits = ({ commits }) => (
  <>
    {commits && (
      <>
        <FloatingCard>
          <CardHeader>
            <Select>master</Select>
            <Filter value="Filter commits" readOnly />
          </CardHeader>
        </FloatingCard>
        <FloatingCard>
          <CommitsList>
            {commits.map(commit => (
              <CommitListItem
                key={commit.node.oid}
                message={commit.node.messageHeadline}
                author={commit.node.author}
                date={commit.node.pushedDate}
                hash={commit.node.oid.substring(0, 6)}
              />
            ))}
          </CommitsList>
        </FloatingCard>
      </>
    )}
  </>
);

RepoCommits.propTypes = {
  commits: PropTypes.array.isRequired,
};
const CommitsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 100%;
`;

export default RepoCommits;
