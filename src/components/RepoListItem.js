import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled(Link)`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 2fr 3fr 1fr 1fr 1fr;
  grid-template-rows: 56px;
  background-color: ${props => (props.topStyle ? null : '#0A0C21')};
  border: 1px solid ${props => (props.topStyle ? '#00000C' : '#1e1f30')};
  border-radius: 3px;
  color: ${props => (props.topStyle ? 'grey' : 'white')};
  padding: 0 24px;
  &:hover {
    background-color: ${props => (props.topStyle ? null : '#007ACC')};
    > h3 {
      text-decoration: underline;
    }
  }
  > h3 {
    font-size: 16px;
    font-weight: ${props => (props.topStyle ? 'regular' : 'bold')};
    align-self: center;
  }
  > p {
    align-self: center;
  }
`;
const Stats = styled.p`
  text-align: right;
`;
const OscoinIcon = styled.span`
  font-size: 2.4em; /* This controls the size. */
  display: inline-block;
  width: 0.4em;
  height: 0.4em;
  border: 0.05em solid ${props => (props.topStyle ? 'grey' : 'white')};
  position: relative;
  border-radius: 1.2em;
  margin-right: 8px;
  top: 1.5px;
`;

const RepoListItem = props => (
  <StyledLink to={props.topStyle ? `/` : `/repo/${props.name}`} params={{ props }} topStyle={props.topStyle}>
    <h3>{!props.topStyle ? props.name : 'name'}</h3>
    <p>{!props.topStyle ? props.description : 'description'}</p>
    <Stats>⑂ {!props.topStyle ? props.forks : 'forks'}</Stats>
    <Stats>⭑ {!props.topStyle ? props.stars : 'stars'}</Stats>
    <Stats>
      <OscoinIcon />
      {!props.topStyle ? props.OSC : 'OSC'}
    </Stats>
  </StyledLink>
);

RepoListItem.defaultProps = {
  name: 'oscoin',
  topStyle: false,
  description: 'the open source coin',
  // owner: 'monadic',
  // last_updated: '1529425176',
  stars: '8390',
  forks: '2303',
  // license: 'GPL',
  OSC: null,
};

RepoListItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  topStyle: PropTypes.bool,
  // id: PropTypes.number,
  // owner: PropTypes.string,
  // last_updated: PropTypes.string,
  stars: PropTypes.string,
  forks: PropTypes.string,
  // license: PropTypes.string,
  OSC: PropTypes.string,
};

export default RepoListItem;
