import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Timestamp from 'react-timestamp';
import { FloatingCard, CardHeader, Picker, BigHeader, Filter, PrimaryButton, Icon } from '../elements';
import { colors } from '../utils';

const RepoBranches = ({ branches }) => (
  <Fragment>
    {branches && (
      <Fragment>
        <FloatingCard>
          <CardHeader>
            <Picker items={['Overview', 'Active', 'Stale', 'All branches']}>master</Picker>
            <PrimaryButton>New branch</PrimaryButton>
          </CardHeader>
        </FloatingCard>
        <FloatingCard>
          <CardHeader>
            <BigHeader>All branches</BigHeader>
            <Filter value="Filter branches" readOnly />
          </CardHeader>
          <BranchesList>
            {branches
              // .filter(branch => branch.node.associatedPullRequests.nodes.length > 0)
              .sort((a, b) => a.node.target.committedDate.toLowerCase() < b.node.target.committedDate.toLowerCase())
              .map(branch => (
                <BranchListItem key={branch.node.target.abbreviatedOid}>
                  <Icon name="branches" />
                  <div>
                    <BranchName>{branch.node.name}</BranchName>
                    <LastCommit>
                      <p>{branch.node.target.abbreviatedOid}</p>
                      <CommitMessage>{branch.node.target.message}</CommitMessage>
                      <p>
                        <Timestamp time={branch.node.target.committedDate} />
                      </p>
                    </LastCommit>
                  </div>
                </BranchListItem>
              ))}
          </BranchesList>
        </FloatingCard>
      </Fragment>
    )}
  </Fragment>
);

RepoBranches.propTypes = {
  branches: PropTypes.array.isRequired,
};
const BranchesList = styled.div`
  border-top: 1px solid ${colors.lightGrey};
  display: grid;
  grid-template-columns: 1fr;
  max-width: 100%;
`;
const BranchListItem = styled.div`
  display: flex;
  flex-direction: row;
  height: 84px;
  padding: 16px 12px;
  border-bottom: 1px solid ${colors.lightGrey};
  &:last-child {
    border-bottom: none;
  }
`;
const BranchName = styled.h3`
  font-family: GTAmericaMedium;
  padding: 2px 0 10px 12px;
`;
const LastCommit = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 12px;
  > p {
    padding-right: 8px;
    color: ${colors.darkGrey};
    &:first-child {
      color: ${colors.purple};
    }
    &:last-child {
      color: ${colors.grey};
    }
  }
`;
const CommitMessage = styled.p`
  max-width: 620px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 22px;
`;

export default RepoBranches;
