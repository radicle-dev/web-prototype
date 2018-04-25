import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Chart from './Chart';

const AppContainer = styled.div`
  color: #00001e;
  font-family: GT America;
  margin: 0 auto;
  padding: 40px;
  max-width: 960px;
  overflow: auto;
  color: white;
`;

const Header = styled.header`
  margin-bottom: 40px;
  padding: 24px;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 40px 1fr;
  background-color: #0a0c21;
  border: 1px solid #1e1f30;
  border-radius: 3px;
  color: ${props => (props.topStyle ? 'grey' : 'white')};
  > p {
    text-align: center;
  }
`;

class Currency extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  state = {
    chartData: null,
  };
  componentDidMount() {
    this.fetchHistory();
  }
  async fetchHistory() {
    const historicalDataUrl = `https://min-api.cryptocompare.com/data/histoday?fsym=${
      this.props.match.params.currencyId
    }&tsym=USD&limit=7`;
    await (await fetch(historicalDataUrl)).json().then(fetchedData => {
      const closeArray = fetchedData.Data.map(e => e.close);
      // const dateArray = fetchedData.Data.map(e => e.time);
      this.setState({
        chartData: {
          labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
          datasets: [
            {
              label: '7d history',
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.2)',
              borderColor: 'rgba(75,192,192,1)',
              borderDashOffset: 0.0,
              data: closeArray,
            },
          ],
        },
      });
    });
  }

  render() {
    const { chartData } = this.state;
    return (
      <AppContainer>
        <Header>
          <Link to="/">Home</Link>
          <p>{this.props.match.params.currencyId} Weekly History</p>
          {/* <p>{this.props.route.currency.name} Weekly History</p> */}
        </Header>
        {chartData && <Chart data={chartData} />}
      </AppContainer>
    );
  }
}
export default Currency;
