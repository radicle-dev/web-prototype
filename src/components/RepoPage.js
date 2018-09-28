import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Timestamp from 'react-timestamp';
import { colors } from '../Utils';
import { Layout, BigHeader, Icon } from '../Elements';

const FileBrowserListItem = props => (
  <FileBrowserListItemContainer id={props.id}>
    {props.type === 'dir' ? <Icon name="folder" /> : <Icon name="file" />}
    <h3>{props.name}</h3>
    <p>latest commit message</p>
    <p>
      <Timestamp time={props.last_updated} />
    </p>
  </FileBrowserListItemContainer>
);

FileBrowserListItem.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  last_updated: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

const RepoPage = props => {
  const repo = props.data.repos.filter(repoItem => repoItem.name === props.match.params.repoId)[0];
  return (
    <Layout>
      <BigHeader>
        <Link to="/">oscoin/{props.match.params.repoId}</Link>
      </BigHeader>
      <FileBrowser>{repo.content.map(file => <FileBrowserListItem key={file.name} {...file} />)}</FileBrowser>
    </Layout>
  );
};

RepoPage.propTypes = {
  match: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

const FileBrowser = styled.div`
  display: grid;
  grid-template-rows: 56px;
  margin: 0 auto;
  max-width: 100%;
`;

const FileBrowserListItemContainer = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-rows: 56px;
  grid-template-columns: 24px 2fr 4fr 1fr;
  background-color: ${props => (props.id % 2 ? null : colors.almostWhite)};
  color: ${colors.black};
  padding: 0 24px;
  align-items: center;
  &:hover {
    background-color: ${colors.lightGrey};
    > h3 {
      text-decoration: underline;
      color: ${colors.blue};
    }
  }
  > h3 {
    font-size: 16px;
    align-self: center;
  }
  > p {
    align-self: center;
    color: ${colors.darkGrey};
  }
  > p:last-child {
    justify-self: end;
  }
`;

export default RepoPage;
