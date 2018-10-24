import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Timestamp from 'react-timestamp';
import styled from 'styled-components';
import { colors, elevation } from '../utils';
import { Icon, IssueLabel } from '../elements';

const IssueListItem = ({ title, author, number, publishedAt, id, repoName, assignees, labels, comments }) => (
  <IssueContainer to={`/repo/${repoName}/issues/${number}`} key={id}>
    <Icon name="issues" />
    <div>
      <IssueTitle>
        <h3>{title}</h3>
        {labels.edges.length > 0 &&
          labels.edges.map(label => (
            <IssueLabel key={label.node.id} labelColor={label.node.color}>
              {label.node.name}
            </IssueLabel>
          ))}
      </IssueTitle>
      <IssueDesc>
        {number} opened <Timestamp time={publishedAt} /> by {author.login}
      </IssueDesc>
    </div>
    <Meta>
      {comments.edges.length > 0 && <Icon name="comment" />}
      {assignees.edges.length > 0 &&
        assignees.edges.map(assignee => <Avatar key={assignee.node.avatarUrl} src={assignee.node.avatarUrl} />)}
    </Meta>
  </IssueContainer>
);

IssueListItem.defaultProps = {
  title: 'issue descriptiom',
  author: { login: 'author' },
  number: '#0',
  id: '#0',
  publishedAt: '2018-08-23T09:27:37Z',
  assignees: {},
  labels: {},
  comments: {},
  repoName: '',
};
IssueListItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.object,
  number: PropTypes.number,
  id: PropTypes.string,
  publishedAt: PropTypes.string,
  repoName: PropTypes.string,
  labels: PropTypes.object,
  assignees: PropTypes.object,
  comments: PropTypes.object,
};

const IssueContainer = styled(Link)`
  display: grid;
  grid-template-columns: 24px auto 60px;
  grid-gap: 12px;
  border-bottom: 1px solid ${colors.lightGrey};
  padding: 16px;
  &:last-child {
    border-bottom: none;
  }
`;
const IssueTitle = styled.div`
  display: flex;
  flex-direction: row;
  > h3 {
    font-family: GTAmericaMedium;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 22px;
    margin: 4px 8px 6px 0;
  }
`;
const IssueDesc = styled.p`
  color: ${colors.grey};
  max-width: 460px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 22px;
`;
const Meta = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const Avatar = styled.img`
  height: 24px;
  width: 24px;
  border-radius: 4px;
  margin-left: 16px;
  ${elevation[0]};
`;
export default IssueListItem;
