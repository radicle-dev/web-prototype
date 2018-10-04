import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SourceListHeader from './SourceListHeader';
import SourceListItem from './SourceListItem';
import MemberListItem from './MemberListItem';
import SideBar from './SideBar';
import OrgOverview from './OrgOverview';
import { Layout, BigHeader, FloatingCard, PrimaryButton, CardHeader, Filter } from '../Elements';

const OrgPage = ({ data }) => (
  <Layout>
    <Wrapper>
      <SideBarContainer>
        <SideBar org />
      </SideBarContainer>
      <ContentContainer>
        <OrgOverview />
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
      </ContentContainer>
    </Wrapper>
  </Layout>
);

OrgPage.propTypes = {
  data: PropTypes.object.isRequired,
};

const SideBarContainer = styled.div`
  grid-area: sd;
`;
const ContentContainer = styled.div`
  grid-area: main;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-areas: 'sd main main main main main';
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
