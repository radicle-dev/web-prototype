import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IssueListItem from './IssueListItem';
import RevisionListItem from './RevisionListItem';
import { colors } from '../utils';
import { BigHeader, FloatingCard, OutlineCard, CardHeader, SecondaryButton, Select } from '../elements';

const RepoOverview = ({ name, description, issues, revisions }) => (
  <FloatingCard>
    <CardHeader>
      <BigHeader>{name}</BigHeader>
      <div>
        <SecondaryButton margin>Favourite</SecondaryButton>
        <SecondaryButton margin>Support</SecondaryButton>
        <SecondaryButton>Fork</SecondaryButton>
      </div>
    </CardHeader>
    <RepoDesc>{description}</RepoDesc>
    <QuickInfo>
      <OutlineCard>
        <CardHeader underline>
          <BigHeader>Latest Issues</BigHeader>
          <Select>Today</Select>
        </CardHeader>
        <QuickInfoListContainer>
          {issues
            .filter(issue => issue.node.closed === false)
            .sort((a, b) => a.node.publishedAt < b.node.publishedAt)
            .slice(0, 3)
            .map(issue => (
              <IssueListItem {...issue.node} key={issue.node.id} />
            ))}
          <LoadMore>View all issues</LoadMore>
        </QuickInfoListContainer>
      </OutlineCard>
      <OutlineCard>
        <CardHeader underline>
          <BigHeader>Open Revisions</BigHeader>
        </CardHeader>
        <QuickInfoListContainer>
          {revisions
            .filter(revision => revision.node.closed === false)
            .sort((a, b) => a.node.publishedAt < b.node.publishedAt)
            .slice(0, 3)
            .map(revision => (
              <RevisionListItem {...revision.node} key={revision.node.id} />
            ))}
          <LoadMore>View all revisions</LoadMore>
        </QuickInfoListContainer>
      </OutlineCard>
    </QuickInfo>
  </FloatingCard>
);

RepoOverview.defaultProps = {
  description: '',
};
RepoOverview.propTypes = {
  name: PropTypes.string.isRequired,
  issues: PropTypes.array.isRequired,
  revisions: PropTypes.array.isRequired,
  description: PropTypes.string,
};

const QuickInfoListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 84px) 48px;
`;
const RepoDesc = styled.p`
  padding: 0 24px 24px 24px;
  line-height: 150%;
  color: ${colors.darkGrey};
`;
const QuickInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  padding: 0 24px 24px 24px;
`;
const LoadMore = styled.div`
  font-family: GTAmericaMedium;
  display: flex;
  background-color: ${colors.almostWhite};
  color: ${colors.darkGrey};
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export default RepoOverview;
