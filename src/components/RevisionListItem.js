import React from 'react';
import PropTypes from 'prop-types';
import Timestamp from 'react-timestamp';
import styled from 'styled-components';
import { colors } from '../utils';
import { Icon, BigLabel } from '../elements';

const RevisionListItem = ({ title, number, mergeable, createdAt, author }) => (
  <QuickRevision>
    <Icon name="revisions" />
    <div>
      <RevisionTitle>{title}</RevisionTitle>
      <RevisionDesc>
        {number} opened <Timestamp time={createdAt} /> by {author.login}
      </RevisionDesc>
    </div>
    <RevisionLabel pass>{mergeable.toLowerCase()}</RevisionLabel>
  </QuickRevision>
);

RevisionListItem.defaultProps = {
  title: 'revision descriptiom',
  author: 'author',
  number: 0,
  mergeable: 'Mergeable',
  createdAt: '2018-08-23T09:27:37Z',
};
RevisionListItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.object,
  number: PropTypes.number,
  mergeable: PropTypes.string,
  createdAt: PropTypes.string,
};

const QuickRevision = styled.div`
  display: grid;
  grid-template-columns: 24px auto 148px;
  grid-gap: 12px;
  border-bottom: 1px solid ${colors.lightGrey};
  padding: 16px;
  &:last-child {
    border-bottom: none;
  }
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

const RevisionLabel = styled(BigLabel)`
  align-self: center;
`;
export default RevisionListItem;
