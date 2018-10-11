import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FloatingCard, CardHeader, Picker, BigHeader, Filter, PrimaryButton } from '../elements';
import { colors } from '../utils';
import IssueListItem from './IssueListItem';

const RepoIssues = ({ issues }) => (
  <Fragment>
    {issues && (
      <Fragment>
        <FloatingCard>
          <StyledHeader>
            <div>
              <BigHeader>Issues</BigHeader>
              <Picker marginLeft items={['open', 'closed']}>
                master
              </Picker>
            </div>
            <div>
              <Filter value="Filter issues" marginRight readOnly />
              <PrimaryButton>New issue</PrimaryButton>
            </div>
          </StyledHeader>
          <IssueList>
            {issues
              .filter(issue => issue.node.closed === false)
              .sort((a, b) => a.node.publishedAt < b.node.publishedAt)
              .map(issue => (
                <IssueListItem {...issue.node} key={issue.node.id} />
              ))}
          </IssueList>
        </FloatingCard>
      </Fragment>
    )}
  </Fragment>
);

RepoIssues.propTypes = {
  issues: PropTypes.array.isRequired,
};
const IssueList = styled.div`
  border-top: 1px solid ${colors.lightGrey};
  display: grid;
  grid-template-columns: 1fr;
  max-width: 100%;
`;
const StyledHeader = styled(CardHeader)`
  > div {
    display: flex;
  }
`;
export default RepoIssues;