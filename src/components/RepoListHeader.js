import React from 'react';
import styled from 'styled-components';
import { colors } from '../Utils';

const RepoListHeader = () => (
  <ListHeader>
    <h3>name</h3>
    <p>description</p>
    <span>forks</span>
    <span>stars</span>
    <span>OSC</span>
  </ListHeader>
);

const ListHeader = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 2fr 3fr 1fr 1fr 1fr;
  grid-template-rows: 56px;
  color: ${colors.grey};
  padding: 0 24px;
  > h3 {
    font-size: 16px;
    font-weight: regular;
    align-self: center;
  }
  > p {
    align-self: center;
  }
  > span {
    align-self: center;
    text-align: right;
  }
`;

export default RepoListHeader;
