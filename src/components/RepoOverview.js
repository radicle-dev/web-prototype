import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IssueListItem from './IssueListItem';
import { colors } from '../utils';
import { BigHeader, FloatingCard, OutlineCard, CardHeader, SecondaryButton, Select, Icon, BigLabel } from '../elements';

const RepoOverview = ({ name, description }) => (
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
          <IssueListItem />
          <IssueListItem />
          <IssueListItem />
          <LoadMore>View all issues</LoadMore>
        </QuickInfoListContainer>
      </OutlineCard>
      <OutlineCard>
        <CardHeader underline>
          <BigHeader>Open Revisions</BigHeader>
        </CardHeader>
        <QuickInfoListContainer>
          <QuickRevision>
            <Icon name="revisions" />
            <div>
              <RevisionTitle>Add support for styled-components</RevisionTitle>
              <RevisionDesc>#4 opened 2 days ago by juliendonck</RevisionDesc>
            </div>
            <RevisionLabel pass>Ready to merge</RevisionLabel>
          </QuickRevision>
          <QuickRevision>
            <Icon name="revisions" />
            <div>
              <RevisionTitle>new api endpoint for issues</RevisionTitle>
              <RevisionDesc>#3 opened 2 days ago by juliendonck</RevisionDesc>
            </div>
            <RevisionLabel>Tests Failed</RevisionLabel>
          </QuickRevision>
          <QuickRevision>
            <Icon name="revisions" />
            <div>
              <RevisionTitle>Reformatted time since</RevisionTitle>
              <RevisionDesc>#2 opened 4 days ago by Tomas</RevisionDesc>
            </div>
            <RevisionLabel>Tests Failed</RevisionLabel>
          </QuickRevision>
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

const QuickRevision = styled.div`
  display: grid;
  grid-template-columns: 24px auto 148px;
  grid-gap: 12px;
  border-bottom: 1px solid ${colors.lightGrey};
  padding: 16px;
`;
const RevisionTitle = styled.h3`
  font-family: GTAmericaMedium;
  margin: 4px 0 6px 0;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 22px;
`;
const RevisionDesc = styled.p`
  color: ${colors.grey};
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 22px;
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
const RevisionLabel = styled(BigLabel)`
  align-self: center;
`;

export default RepoOverview;
