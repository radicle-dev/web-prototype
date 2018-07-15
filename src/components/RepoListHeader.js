import React from 'react';
import styled from 'styled-components';

const ListHeader = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 2fr 3fr 1fr 1fr 1fr;
  grid-template-rows: 56px;
  color: grey;
  padding: 0 24px;
  > h3 {
    font-size: 16px;
    font-weight: regular;
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
  border: 0.05em solid grey;
  position: relative;
  border-radius: 1.2em;
  margin-right: 8px;
  top: 1.5px;
`;

const RepoListHeader = () => (
  <ListHeader>
    <h3>name</h3>
    <p>description</p>
    <Stats>⑂ forks</Stats>
    <Stats>⭑ stars</Stats>
    <Stats>
      <OscoinIcon />
      OSC
    </Stats>
  </ListHeader>
);

export default RepoListHeader;
