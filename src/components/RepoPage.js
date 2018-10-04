import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Layout } from '../Elements';
import RepoOverview from './RepoOverview';
import RepoSource from './RepoSource';
import SideBar from './SideBar';

const RepoPage = ({ data, match, selectedView }) => {
  const repo = data.repositories.nodes.filter(repoItem => repoItem.name === match.params.repoId)[0];
  const sidebar = <SideBar repoId={repo.name} />;
  const content = () => {
    switch (selectedView) {
      case 'overview':
        return (
          <Fragment>
            <RepoOverview {...repo} />
            <RepoSource {...repo} />
          </Fragment>
        );
      case 'source':
        return <RepoSource {...repo} />;
      case 'commits':
        return <h1>commits</h1>;
      case 'branches':
        return <h1>branches</h1>;
      case 'issues':
        return <h1>issues</h1>;
      case 'revisions':
        return <h1>revisions</h1>;
      case 'settings':
        return <h1>settings</h1>;
      default:
        return null;
    }
  };
  return <Layout sidebar={sidebar}>{content()}</Layout>;
};

RepoPage.propTypes = {
  match: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default RepoPage;
