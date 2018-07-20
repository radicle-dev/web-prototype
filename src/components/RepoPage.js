import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { Toggle } from '../Utils';
import { Layout, ProjectHeader } from '../Elements';

export default class RepoPage extends Component {
  render() {
    return (
      <Layout>
        <ProjectHeader>
          <Link to="/">oscoin/{this.props.match.params.repoId}</Link>
        </ProjectHeader>
        <div />
      </Layout>
    );
  }
}

RepoPage.propTypes = {
  match: PropTypes.object.isRequired,
};
