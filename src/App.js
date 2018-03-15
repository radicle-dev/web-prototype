import React, { Component } from 'react';
import 'reset-css/reset.css';
import styled from 'styled-components';
import Header from './components/Header';

const AppContainer = styled.div`
  background-color: #f6f7f7;
`;
const Grid = styled.div`
  color: #00001e;
  font-family: GT America;
  margin: 0 auto;
  padding: 40px;
  max-width: 960px;
  overflow: auto;
  > p {
    padding: 20px;
  }
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'React Template',
      // fetchResults: null
    };
  }

  // componentDidMount() {
  //   this.fetchGasStations();
  // }

  // fetchGasStations() {
  //   fetch('http://api.test.com')
  //   .then(response => response.json())
  //   .then((data) => {
  //     this.setState({ fetchResults: data });
  //     console.log('data received');
  //   });
  // }

  render() {
    return (
      <AppContainer>
        <Grid>
          <Header title={this.state.title} />
          <p>Rock &amp; Roll</p>
        </Grid>
      </AppContainer>
    );
  }
}

export default App;
