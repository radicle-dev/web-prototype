import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import gql from 'graphql-tag';
import GithubClient from './github-graphql';
import { colors } from './utils';
import OrgPage from './components/OrgPage';
import RepoPage from './components/RepoPage';
import IssuePage from './components/IssuePage';
import NotFound from './components/NotFound';

import Regular from './fonts/GTAmericaRegular.otf';
import RegularItalic from './fonts/GTAmericaRegularItalic.otf';
import Medium from './fonts/GTAmericaMedium.otf';
import MediumItalic from './fonts/GTAmericaMediumItalic.otf';
import Bold from './fonts/GTAmericaBold.otf';
import Mono from './fonts/GTAmericaMonoRegular.otf';

export default class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    this.fetchRepos();
  }

  fetchRepos = async () => {
    const response = await GithubClient.query({
      query: gql`
        query {
          organization(login: "oscoin") {
            id
            name
            description
            avatarUrl
            repositories(first: 100) {
              nodes {
                id
                name
                description
                updatedAt
              }
            }
            members(first: 30) {
              nodes {
                id
                name
                login
                avatarUrl
              }
            }
          }
        }
      `,
    });

    this.setState({
      data: response.data.organization,
    });
    // console.log(response.data.organization);
  };

  render() {
    const { data } = this.state;
    return (
      <>
        {data && (
          <BrowserRouter>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/overview" />} />
              <Route
                exact
                path="/overview"
                render={props => <OrgPage {...props} data={data} selectedView="overview" />}
              />
              <Route
                exact
                path="/repositories"
                render={props => <OrgPage {...props} data={data} selectedView="repositories" />}
              />
              <Route
                exact
                path="/members"
                render={props => <OrgPage {...props} data={data} selectedView="members" />}
              />
              <Route
                exact
                path="/repo/:repoId/overview"
                render={props => <RepoPage {...props} data={data} selectedView="overview" />}
              />
              <Route
                exact
                path="/repo/:repoId/source"
                render={props => <RepoPage {...props} data={data} selectedView="source" />}
              />
              <Route
                exact
                path="/repo/:repoId/commits"
                render={props => <RepoPage {...props} data={data} selectedView="commits" />}
              />
              <Route
                exact
                path="/repo/:repoId/branches"
                render={props => <RepoPage {...props} data={data} selectedView="branches" />}
              />
              <Route
                exact
                path="/repo/:repoId/issues"
                render={props => <RepoPage {...props} data={data} selectedView="issues" />}
              />
              <Route
                exact
                path="/repo/:repoId/issues/:issueNumber"
                render={props => <IssuePage {...props} data={data} />}
              />
              <Route
                exact
                path="/repo/:repoId/revisions"
                render={props => <RepoPage {...props} data={data} selectedView="revisions" />}
              />
              <Route
                exact
                path="/repo/:repoId/settings"
                render={props => <RepoPage {...props} data={data} selectedView="settings" />}
              />
              <Route exact path="/juliendonck" render={() => <h1>juliendonck</h1>} />
              <Route exact path="/daimler" render={() => <h1>daimler</h1>} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        )}
      </>
    );
  }
}

injectGlobal([
  `
  /* reset.css */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video, button, input, textarea {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    color: inherit;
    font-kerning: normal;
    text-decoration: none;
    vertical-align: baseline;
    background-color: transparent;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after, q:before, q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* global styles */

  @font-face {
    font-family: GTAmerica;
    src: url(${Regular}) format("opentype");
  }

  @font-face {
    font-family: GTAmerica;
    font-style: italic;
    src: url(${RegularItalic}) format("opentype");
  }

  @font-face {
    font-family: GTAmericaMedium;
    src: url(${Medium}) format("opentype");
  }
  @font-face {
    font-family: GTAmericaMedium;
    font-style: italic;
    src: url(${MediumItalic}) format("opentype");
  }
  @font-face {
    font-family: GTAmericaBold;
    src: url(${Bold}) format("opentype");
  }

  @font-face {
    font-family: GTAmericaMono;
    src: url(${Mono}) format("opentype");
  }

  body {
    font-family: GTAmerica, Helvetica, Arial, sans-serif;
    font-size: 16px;
    color: ${colors.black};
    background-color: #f2f2f2;
  }
`,
]);
