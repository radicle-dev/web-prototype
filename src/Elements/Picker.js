import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils';

const Picker = () => (
  <PickerContainer>
    <Item active>Overview</Item>
    <Item>Active</Item>
    <Item>Stale</Item>
    <Item>All branches</Item>
  </PickerContainer>
);

const PickerContainer = styled.div`
  display: flex;
  border-radius: 4px;
  border: 1px solid ${colors.lightGrey};
  background-color: ${colors.almostWhite};
  display: flex;
  align-items: center;
  ${({ margin }) =>
    margin &&
    `
    margin-right: 16px;
  `};
`;
const Item = styled.p`
  height: 36px;
  color: ${colors.darkGrey};
  padding: 8px 16px;
  border-right: 1px solid ${colors.lightGrey};
  ${({ active }) =>
    active &&
    `
    background-color: ${colors.purple};
    color: ${colors.white};
    font-family: GTAmericaMedium;
  `};
  &:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border-right: none;
  }
  &:last-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border-right: none;
  }
`;
export default Picker;
