import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import { colors } from './Utils';
import OrgPage from './Components/OrgPage';
import RepoPage from './Components/RepoPage';
import NotFound from './Components/NotFound';

const url = 'http://localhost:5678/';

export default class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    this.fetchRepos();
  }

  async fetchRepos() {
    await (await fetch(url)).json().then(data => {
      this.setState({ data });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <Fragment>
        {data && (
          <BrowserRouter>
            <Switch>
              <Route exact path="/" render={props => <OrgPage {...props} data={data} />} />
              <Route exact path="/repo/:repoId/overview" render={props => <RepoPage {...props} data={data} />} />
              <Route exact path="/juliendonck" render={() => <h1>juliendonck</h1>} />
              <Route exact path="/daimler" render={() => <h1>daimler</h1>} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        )}
      </Fragment>
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

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video, button, input {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    color: inherit;
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
    src: url("./Utils/fonts/GT America Regular.otf") format("opentype");
  }

  @font-face {
    font-family: GTAmerica;
    font-style: italic;
    src: url("./Utils/fonts/GT America Regular Italic.otf") format("opentype");
  }

  @font-face {
    font-family: GTAmerica;
    font-weight: bold;
    src: url("./Utils/fonts/GT America Medium.otf") format("opentype");
  }
  @font-face {
    font-family: GTAmerica;
    font-weight: bold;
    font-style: italic;
    src: url("./Utils/fonts/GT America Medium Italic.otf") format("opentype");
  }

  @font-face {
    font-family: GTAmericaMono;
    src: url("./Utils/fonts/GT America Mono Regular.otf") format("opentype");
  }

  body {
    font-family: GTAmerica, Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: ${colors.black};
    background-color: #f2f2f2;
  }
`,
]);
