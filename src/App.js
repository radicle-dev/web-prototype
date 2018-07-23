import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import OrgPage from './Components/OrgPage';
import RepoPage from './Components/RepoPage';
import NotFound from './Components/NotFound';

const url = 'http://localhost:5678/';

class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    this.fetchRepos();
  }

  async fetchRepos() {
    await (await fetch(url)).json().then(data => {
      this.setState({ data });
      console.log(this.state.data);
    });
  }

  render() {
    const { data } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => <OrgPage {...props} data={data} />} />
          <Route exact path="/repo/:repoId" render={props => <RepoPage {...props} data={data} />} />
          <Route exact path="/juliendonck" render={() => <h1>juliendonck</h1>} />
          <Route exact path="/daimler" render={() => <h1>daimler</h1>} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
