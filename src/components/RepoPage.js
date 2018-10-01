import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../Utils';
import {
  Layout,
  BigHeader,
  FloatingCard,
  OutlineCard,
  CardHeader,
  SecondaryButton,
  Select,
  PrimaryButton,
  Icon,
  BigLabel,
} from '../Elements';
import SourceListHeader from './SourceListHeader';
import SourceListItem from './SourceListItem';

const RepoPage = props => {
  const repo = props.data.repos.filter(repoItem => repoItem.name === props.match.params.repoId)[0];
  return (
    <Layout>
      <FloatingCard>
        <CardHeader>
          <BigHeader>{props.match.params.repoId}</BigHeader>
          <div>
            <SecondaryButton margin>Favourite</SecondaryButton>
            <SecondaryButton margin>Support</SecondaryButton>
            <SecondaryButton>Fork</SecondaryButton>
          </div>
        </CardHeader>
        <RepoDesc>
          In hac habitasse platea dictumst. Suspendisse potenti. Vestibulum sollicitudin blandit mi, eget tincidunt diam
          maximus vel. Pellentesque luctus mauris rhoncus, aliquam nunc molestie, consectetur eros. In hac habitasse
          platea dictumst. Suspendisse potenti. Vestibulum sollicitudin blandit mi, eget tincidunt diam maximus vel.
          Pellentesque luctus mauris rhoncus, aliquam nunc molestie, consectetur eros.
        </RepoDesc>
        <QuickInfo>
          <OutlineCard>
            <CardHeader underline>
              <BigHeader>Latest Issues</BigHeader>
              <Select>Today</Select>
            </CardHeader>
            <QuickInfoListContainer>
              <QuickIssue>
                <Icon name="issues" />
                <div>
                  <IssueTitle>Radicle extras package</IssueTitle>
                  <IssueDesc>#82 opened 11 days ago by jameshaydon</IssueDesc>
                </div>
              </QuickIssue>
              <QuickIssue>
                <Icon name="issues" />
                <div>
                  <IssueTitle>Split server into CentralChain, and ChainApi</IssueTitle>
                  <IssueDesc>#81 opened 11 days ago by jameshaydon</IssueDesc>
                </div>
              </QuickIssue>
              <QuickIssue>
                <Icon name="issues" />
                <div>
                  <IssueTitle>Config file not found when not using XDG_*</IssueTitle>
                  <IssueDesc>#78 opened 11 days ago by jkarni</IssueDesc>
                </div>
              </QuickIssue>
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
                <RevisionLabel>Tests Failed</RevisionLabel>
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
          {repo.content.map(file => <SourceListItem key={file.name} {...file} />)}
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
const QuickInfoListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 84px 84px 84px 48px;
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
const QuickIssue = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${colors.lightGrey};
  padding: 16px;
`;
const IssueTitle = styled.h3`
  font-weight: bold;
  margin: 4px 0 10px 12px;
  max-width: 460px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const IssueDesc = styled.p`
  color: ${colors.grey};
  margin-left: 12px;
  max-width: 460px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const QuickRevision = styled.div`
  display: grid;
  grid-template-columns: 24px 280px auto;
  grid-gap: 12px;
  border-bottom: 1px solid ${colors.lightGrey};
  padding: 16px;
`;
const RevisionTitle = styled.h3`
  font-weight: bold;
  margin: 4px 0 10px 0;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const RevisionDesc = styled.p`
  color: ${colors.grey};
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const LoadMore = styled.div`
  font-weight: bold;
  display: flex;
  background-color: ${colors.almostWhite};
  color: ${colors.darkGrey};
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
const RevisionLabel = BigLabel.extend`
  align-self: center;
`;

export default RepoPage;
