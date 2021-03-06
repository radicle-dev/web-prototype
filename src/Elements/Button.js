// import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils';

export const PrimaryButton = styled.button`
  height: 36px;
  font-size: 16px;
  padding: 0 16px 4px 16px;
  font-family: GTAmericaMedium;
  background-color: ${colors.purple};
  color: ${colors.white};
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -webkit-transition-duration: 0.2s;
  -moz-transition-duration: 0.2s;
  transition-duration: 0.2s;
  ${({ disabled }) =>
    disabled &&
    `
    background-color: ${colors.almostWhite};
    color: ${colors.lightGrey};
  `};
  &:hover {
    background-color: ${colors.blue};
    ${({ disabled }) =>
      disabled &&
      `
      background-color: ${colors.almostWhite};
      color: ${colors.lightGrey};
    `};
  }
  &:active {
    -webkit-box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.2);
    ${({ disabled }) =>
      disabled &&
      `
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
    `};
  }
  ${({ marginRight }) =>
    marginRight &&
    `
    margin-right: 16px;
  `};
  ${({ marginLeft }) =>
    marginLeft &&
    `
    margin-left: 16px;
  `};
`;

export const SecondaryButton = styled(PrimaryButton)`
  color: ${colors.darkGrey};
  background-color: ${colors.almostWhite};
  &:hover {
    background-color: ${colors.lightGrey};
  }
`;
