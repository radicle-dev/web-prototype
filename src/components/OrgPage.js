import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SourceListHeader from './SourceListHeader';
import SourceListItem from './SourceListItem';
import MemberListItem from './MemberListItem';
import { Layout, BigHeader, FloatingCard, PrimaryButton, CardHeader, Filter } from '../Elements';
import { elevation, colors } from '../Utils';

const OrgPage = ({ data }) => (
  <Layout>
    <FloatingCard>
      <CardHeader>
        <OrgLogo />
        <div>
          <BigHeader>oscoin</BigHeader>
          <OrgDesc>
            In hac habitasse platea dictumst. Suspendisse potenti. Vestibulum sollicitudin blandit mi, eget tincidunt
            diam maximus vel. Pellentesque luctus mauris rhoncus, aliquam nunc molestie, consectetur eros. In hac
            habitasse platea dictumst. Suspendisse potenti. Vestibulum sollicitudin blandit mi, eget tincidunt diam
            maximus vel. Pellentesque luctus mauris rhoncus, aliquam nunc molestie, consectetur eros.
          </OrgDesc>
        </div>
      </CardHeader>
    </FloatingCard>
    <FloatingCard>
      <CardHeader>
        <BigHeader>Repositories</BigHeader>
        <div>
          <Filter margin value="Filter" readOnly />
          <PrimaryButton>New repository</PrimaryButton>
        </div>
      </CardHeader>
      {data && (
        <RepoGridContainer>
          <SourceListHeader />
          {data.repos.map(repo => (
            <SourceListItem key={repo.id} {...repo} />
          ))}
        </RepoGridContainer>
      )}
    </FloatingCard>
    <FloatingCard>
      <CardHeader underline>
        <BigHeader>Members</BigHeader>
        <div>
          <Filter margin value="Filter" readOnly />
          <PrimaryButton>Add member</PrimaryButton>
        </div>
      </CardHeader>
      {data && (
        <MembersGridContainer>
          {data.users.map(user => (
            <MemberListItem key={user.id} {...user} />
          ))}
        </MembersGridContainer>
      )}
    </FloatingCard>
  </Layout>
);

OrgPage.propTypes = {
  data: PropTypes.object.isRequired,
};

const OrgLogo = styled.div`
  min-height: 72px;
  min-width: 72px;
  max-height: 72px;
  max-width: 72px;
  border-radius: 4px;
  ${elevation[0]};
  margin-right: 24px;
`;
const OrgDesc = styled.p`
  margin-top: 12px;
  line-height: 150%;
  color: ${colors.darkGrey};
`;
const RepoGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 36px 48px;
  margin: 0 auto;
  max-width: 100%;
  padding-bottom: 12px;
`;
const MembersGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  max-width: 100%;
  padding-bottom: 12px;
`;
export default OrgPage;
