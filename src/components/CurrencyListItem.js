import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled(Link)`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 0.5fr 4fr 1fr 2fr 2fr 2fr;
  grid-template-rows: 56px;
  background-color: ${props => (props.topStyle ? null : '#0A0C21')};
  border: 1px solid ${props => (props.topStyle ? '#00000C' : '#1e1f30')};
  border-radius: 3px;
  color: ${props => (props.topStyle ? 'grey' : 'white')};
  padding: 0 24px;
  > h3 {
    font-size: 18px;
    font-weight: ${props => (props.topStyle ? 'regular' : 'bold')};
    align-self: center;
  }
  > p {
    align-self: center;
  }
`;
const Percentage = styled.p`
  color: ${props => (props.color ? '#14d693' : '#ff91a7')};
  justify-self: end;
`;

const CurrencyListItem = props => (
  <StyledLink to={props.topStyle ? `/` : `/currency/${props.symbol}`} params={{ props }} topStyle={props.topStyle}>
    <p>{props.rank}</p>
    <h3>{props.name}</h3>
    <p>{props.symbol}</p>
    <p>
      {props.topStyle ? '' : '$'} {props.price_usd}
    </p>
    <p>{props.price_btc}</p>
    <Percentage color={props.percent_change_24h > 0}>
      {props.percent_change_24h} {props.topStyle ? '' : '%'}
    </Percentage>
  </StyledLink>
);

CurrencyListItem.defaultProps = {
  name: 'Name',
  symbol: 'Symbol',
  price_usd: 'USD price',
  price_btc: 'BTC price',
  topStyle: false,
  percent_change_24h: 'Δ 1d',
  rank: 'rank',
  // '24h_volume_usd': '24h volume USD',
  // market_cap_usd: 'Market cap USD',
  // available_supply: 'Available supply',
  // total_supply: 'Total supply',
  // max_supply: 'Maximum supply',
  // percent_change_1h: 'Δ 1hr',
  // percent_change_7d: 'Δ 7d',
  // last_updated: 'Last Updated',
  // price_eur: 'EUR price',
  // '24h_volume_eur': '24h volume EUR',
  // market_cap_eur: 'Market cap EUR',
};

CurrencyListItem.propTypes = {
  name: PropTypes.string,
  price_usd: PropTypes.string,
  price_btc: PropTypes.string,
  symbol: PropTypes.string,
  topStyle: PropTypes.bool,
  percent_change_24h: PropTypes.string,
  rank: PropTypes.string,
  // '24h_volume_usd': PropTypes.string,
  // market_cap_usd: PropTypes.string,
  // available_supply: PropTypes.string,
  // total_supply: PropTypes.string,
  // max_supply: PropTypes.string,
  // percent_change_1h: PropTypes.string,
  // percent_change_7d: PropTypes.string,
  // last_updated: PropTypes.string,
  // price_eur: PropTypes.string,
  // '24h_volume_eur': PropTypes.string,
  // market_cap_eur: PropTypes.string,
};

export default CurrencyListItem;
