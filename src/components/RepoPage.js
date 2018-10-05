import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import GithubClient from '../github-graphql';
import { Layout } from '../Elements';
import RepoOverview from './RepoOverview';
import RepoSource from './RepoSource';
import SideBar from './SideBar';

export default class RepoPage extends Component {
  state = {
    repo: null,
  };

  componentDidMount() {
    this.fetchRepo();
    // this.fetchMembers();
  }

  fetchRepo = async () => {
    const response = await GithubClient.query({
      query: gql`
        query {
          repository(owner: "oscoin", name: ${this.props.match.params.repoId}) {
            name
            description
            object(expression: "master:") {
              ... on Tree{
                entries{
                  name
                  type
                }
              }
            }
            issues(last:3, states:OPEN) {
              edges {
                node {
                  title
                  url
                  labels(first:5) {
                    edges {
                      node {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }


      `,
    });

    this.setState({
      repo: response.data.repository,
    });
    console.log(response.data.repository);
  };

  render() {
    const { repo } = this.state;
    const content = () => {
      switch (this.props.selectedView) {
        case 'overview':
          return (
            <Fragment>
              <RepoOverview {...repo} />
              <RepoSource repo={repo} />
            </Fragment>
          );
        case 'source':
          return <RepoSource repo={repo} />;
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
    return <Fragment>{repo && <Layout sidebar={<SideBar repoId={repo.name} />}>{content()}</Layout>}</Fragment>;
  }
}

RepoPage.propTypes = {
  match: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};
