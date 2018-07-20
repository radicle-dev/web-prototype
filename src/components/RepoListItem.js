import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RepoListItem = props => (
  <StyledLink to={`/repo/${props.name}`} params={{ props }} id={props.id}>
    <h3>{props.name}</h3>
    <p>{props.description}</p>
    <Stats>⑂ {props.forks}</Stats>
    <Stats>⭑ {props.stars}</Stats>
    <Stats>
      <OscoinIcon />
      {props.OSC}
    </Stats>
  </StyledLink>
);

RepoListItem.defaultProps = {
  name: 'oscoin',
  description: 'the open source coin',
  stars: '8390',
  forks: '2303',
  OSC: null,
  // owner: 'monadic',
  // last_updated: '1529425176',
  // license: 'GPL',
};

RepoListItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  stars: PropTypes.string,
  forks: PropTypes.string,
  OSC: PropTypes.string,
  id: PropTypes.number.isRequired,
  // owner: PropTypes.string,
  // last_updated: PropTypes.string,
  // license: PropTypes.string,
};

const StyledLink = styled(Link)`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 2fr 3fr 1fr 1fr 1fr;
  grid-template-rows: 56px;
  background-color: ${props => (props.id % 2 ? null : '#FAFAFA')};
  /* border-radius: 3px; */
  color: #010101;
  padding: 0 24px;
  &:hover {
    background-color: #e5e5e5;
    > h3 {
      text-decoration: underline;
    }
  }
  > h3 {
    font-size: 16px;
    font-weight: bold;
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
  border: 0.05em solid #010101;
  position: relative;
  border-radius: 1.2em;
  margin-right: 8px;
  top: 1.5px;
`;

export default RepoListItem;
