import React from 'react';
import PropTypes from 'prop-types';
import Timestamp from 'react-timestamp';
import styled from 'styled-components';
import { colors } from '../utils';
import { Icon } from '../elements';

const IssueListItem = ({ title, author, number, publishedAt, id }) => (
  <QuickIssue key={id}>
    <Icon name="issues" />
    <div>
      <IssueTitle>{title}</IssueTitle>
      <IssueDesc>
        {number} opened <Timestamp time={publishedAt} /> by {author.login}
      </IssueDesc>
    </div>
  </QuickIssue>
);

IssueListItem.defaultProps = {
  title: 'issue descriptiom',
  author: 'author',
  number: '#0',
  id: '#0',
  publishedAt: '2018-08-23T09:27:37Z',
};
IssueListItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  number: PropTypes.number,
  id: PropTypes.string,
  publishedAt: PropTypes.string,
};

const QuickIssue = styled.div`
  display: grid;
  grid-template-columns: 24px auto;
  grid-gap: 12px;
  border-bottom: 1px solid ${colors.lightGrey};
  padding: 16px;
  &:last-child {
    border-bottom: none;
  }
`;
const IssueTitle = styled.h3`
  font-family: GTAmericaMedium;
  margin: 4px 0 6px 0;
  max-width: 460px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 22px;
`;
const IssueDesc = styled.p`
  color: ${colors.grey};
  max-width: 460px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 22px;
`;
export default IssueListItem;
