import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors, elevation } from '../Utils';
import { SmallLabel } from '../Elements';

const MemberListItem = ({ avatarUrl, firstName, lastName, username }) => (
  <ListItem>
    <Avatar src={avatarUrl} />
    <MetaData>
      <Name>
        {firstName} {lastName}
      </Name>
      <Username>{username}</Username>
    </MetaData>
    <SmallLabel>Owner</SmallLabel>
  </ListItem>
);

MemberListItem.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

const ListItem = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 48px 6fr 1fr;
  grid-template-rows: 80px;
  color: ${colors.darkGrey};
  padding: 0 24px;
  align-items: center;
  border-bottom: 1px solid ${colors.lightGrey};
`;

const Avatar = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 4px;
  ${elevation[0]};
`;

const MetaData = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.h4`
  line-height: 125%;
  font-weight: bold;
  color: ${colors.black};
`;
const Username = styled(Name)`
  color: ${colors.darkGrey};
  font-weight: normal;
`;

export default MemberListItem;
