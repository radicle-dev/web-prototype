import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import CurrencyListItem from './components/CurrencyListItem';

const AppContainer = styled.div`
  color: #00001e;
  font-family: GT America;
  margin: 0 auto;
  padding: 40px;
  max-width: 960px;
  overflow: auto;
`;
const GridContainer = styled.div`
  margin-top: 40px;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr;
`;

const url = 'https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=20';

class App extends Component {
  state = {
    title: 'Currency overview',
    currencies: null,
  };

  componentDidMount() {
    this.fetchCoins();
  }

  async fetchCoins() {
    await (await fetch(url)).json().then(data => {
      this.setState({ currencies: data });
    });
  }

  render() {
    const { currencies, title } = this.state;
    return (
      <AppContainer>
        <Header title={title} />
        {currencies && (
          <GridContainer>
            <CurrencyListItem topStyle />
            {currencies.map(currency => <CurrencyListItem key={currency.id} {...currency} />)}
          </GridContainer>
        )}
      </AppContainer>
    );
  }
}

export default App;
