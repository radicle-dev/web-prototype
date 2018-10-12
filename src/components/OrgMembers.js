import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BigHeader, FloatingCard, CardHeader, Filter, PrimaryButton } from '../elements';
import MemberListItem from './MemberListItem';

const OrgMembers = ({ members }) => (
  <FloatingCard>
    <CardHeader underline>
      <BigHeader>Members</BigHeader>
      <div>
        <Filter marginRight value="Filter" readOnly />
        <PrimaryButton>Add member</PrimaryButton>
      </div>
    </CardHeader>
    {members && (
      <MembersGridContainer>
        {members.map(user => (
          <MemberListItem key={user.id} {...user} />
        ))}
      </MembersGridContainer>
    )}
  </FloatingCard>
);
OrgMembers.propTypes = {
  members: PropTypes.array.isRequired,
};

const MembersGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  max-width: 100%;
`;

export default OrgMembers;
