import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils';

const RepoListHeader = () => (
  <ListHeader>
    <h3>name</h3>
    <p>description</p>
    <span>Last update</span>
  </ListHeader>
);

const ListHeader = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 2fr 5fr 1fr;
  grid-template-rows: 36px;
  height: 36px;
  color: ${colors.darkGrey};
  text-transform: uppercase;
  font-size: 14px;
  font-family: GTAmericaMedium;
  background-color: ${colors.almostWhite};
  border-top: 1px solid ${colors.lightGrey};
  border-bottom: 1px solid ${colors.lightGrey};
  padding: 0 24px;
  align-items: center;
  > span {
    text-align: right;
  }
`;

export default RepoListHeader;
