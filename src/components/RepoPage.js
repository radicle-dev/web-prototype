import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import GithubClient from '../github-graphql';
import { Layout } from '../elements';
import RepoOverview from './RepoOverview';
import RepoSource from './RepoSource';
import RepoCommits from './RepoCommits';
import RepoBranches from './RepoBranches';
import RepoIssues from './RepoIssues';
import SideBar from './SideBar';

export default class RepoPage extends Component {
  state = {
    repo: null,
  };

  componentDidMount() {
    this.fetchRepo();
  }

  fetchRepo = async () => {
    const { match } = this.props;
    const response = await GithubClient.query({
      query: gql`
        query {
          repository(owner: "oscoin", name: ${match.params.repoId}) {
            ref(qualifiedName: "master") {
              target {
                ... on Commit {
                  history(first: 20) {
                    edges {
                      node {
                        oid
                        pushedDate
                        messageHeadline
                        author {
                          name
                          avatarUrl
                        }
                      }
                    }
                  }
                }
              }
            }
            refs(first: 20, refPrefix:"refs/heads/") {
              edges {
                node {
                  associatedPullRequests(last:1) {
                    nodes {
                      additions
                      deletions
                      state
                    }
                  }
                  name
                  target {
                    ... on Commit {
                      abbreviatedOid
                      message
                      committedDate
                    }
                  }
                }
              }
            }
            name
            description
            object(expression: "master:") {
              ... on Tree {
                entries {
                  name
                  type
                  oid
                }
              }
            }
            issues(last:20, states:OPEN) {
              edges {
                node {
                  author {
                    login
                  }
                  assignees(first: 1) {
                    edges {
                      node {
                        avatarUrl(size: 24)
                      }
                    }
                  }
                  closed
                  title
                  bodyText
                  id
                  number
                  publishedAt
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
    const { selectedView } = this.props;
    const content = () => {
      switch (selectedView) {
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
          return <RepoCommits commits={repo.ref.target.history.edges} />;
        case 'branches':
          return <RepoBranches branches={repo.refs.edges} />;
        case 'issues':
          return <RepoIssues issues={repo.issues.edges} />;
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
