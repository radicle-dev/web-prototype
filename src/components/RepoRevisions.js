import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FloatingCard, CardHeader, Picker, BigHeader, Filter, PrimaryButton } from '../elements';
import { colors } from '../utils';
import RevisionListItem from './RevisionListItem';

const RepoRevisions = ({ revisions }) => (
  <Fragment>
    {revisions && (
      <Fragment>
        <FloatingCard>
          <StyledHeader>
            <div>
              <BigHeader>Revision</BigHeader>
              <Picker marginLeft items={['open', 'closed']} />
            </div>
            <div>
              <Filter value="Filter revisions" marginRight readOnly />
              <PrimaryButton>New revision</PrimaryButton>
            </div>
          </StyledHeader>
          <List>
            {revisions
              .filter(revision => revision.node.closed === false)
              .sort((a, b) => a.node.publishedAt < b.node.publishedAt)
              .map(revision => (
                <RevisionListItem {...revision.node} key={revision.node.id} />
              ))}
          </List>
        </FloatingCard>
      </Fragment>
    )}
  </Fragment>
);

RepoRevisions.propTypes = {
  revisions: PropTypes.array.isRequired,
};
const List = styled.div`
  border-top: 1px solid ${colors.lightGrey};
  display: grid;
  grid-template-columns: 1fr;
  max-width: 100%;
`;
const StyledHeader = styled(CardHeader)`
  > div {
    display: flex;
  }
`;
export default RepoRevisions;
