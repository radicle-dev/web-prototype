import React from 'react';
import PropTypes from 'prop-types';
import Timestamp from 'react-timestamp';
import styled from 'styled-components';
import { colors } from '../Utils';

const CommitListItem = ({ date, message, author, hash }) => (
  <ListItem>
    <Avatar src={author.avatarUrl} />
    <Author>{author.name}</Author>
    <Message>{message}</Message>
    <Hash>{hash}</Hash>
    <Date>
      <Timestamp time={date} />
    </Date>
  </ListItem>
);

CommitListItem.defaultProps = {
  date: '',
};
CommitListItem.propTypes = {
  date: PropTypes.string,
  message: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  hash: PropTypes.string.isRequired,
};

const ListItem = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 24px 160px auto 80px 120px;
  grid-template-rows: 48px;
  color: ${colors.darkGrey};
  padding: 0 12px;
  align-items: center;
  > p {
    padding-bottom: 3px;
  }
  border-bottom: 1px solid ${colors.lightGrey};
`;

const Avatar = styled.img`
  height: 24px;
  width: 24px;
  border-radius: 2px;
`;
const Author = styled.p`
  font-family: GTAmericaMedium;
`;
const Message = styled.p`
  color: ${colors.darkGrey};
`;
const Hash = styled.p`
  text-align: right;
  color: ${colors.purple};
`;
const Date = styled.p`
  text-align: right;
  color: ${colors.darkGrey};
`;
export default CommitListItem;
