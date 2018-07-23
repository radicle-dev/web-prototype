import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../Utils';
import { Layout, ProjectHeader, Icon } from '../Elements';

export default class RepoPage extends Component {
  render() {
    return (
      <Layout>
        <ProjectHeader>
          <Link to="/">oscoin/{this.props.match.params.repoId}</Link>
        </ProjectHeader>
        <FileBrowser>
          <FileBrowserListItem id={0}>
            <Icon name="folder" />
            <h3>foldername</h3>
            <p>latest commit message</p>
            <p>3 hours</p>
          </FileBrowserListItem>
          <FileBrowserListItem id={1}>
            <Icon name="file" />
            <h3>filename</h3>
            <p>latest commit message</p>
            <p>2 hours</p>
          </FileBrowserListItem>
        </FileBrowser>
      </Layout>
    );
  }
}

RepoPage.propTypes = {
  match: PropTypes.object.isRequired,
};

const FileBrowser = styled.div`
  display: grid;
  grid-template-rows: 56px;
  margin: 0 auto;
  max-width: 100%;
`;

const FileBrowserListItem = styled.div`
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
