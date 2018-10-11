import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../utils';

const Picker = ({ items, marginLeft, marginRight }) => (
  <PickerContainer marginLeft={marginLeft} marginRight={marginRight}>
    {items.map((item, index) => (
      <Item active={index === 0} key={item}>
        {item}
      </Item>
    ))}
  </PickerContainer>
);

Picker.defaultProps = {
  items: ['item 1', 'item 2'],
  marginLeft: false,
  marginRight: false,
};
Picker.propTypes = {
  items: PropTypes.array,
  marginLeft: PropTypes.bool,
  marginRight: PropTypes.bool,
};

const PickerContainer = styled.div`
  display: flex;
  border-radius: 4px;
  border: 1px solid ${colors.lightGrey};
  background-color: ${colors.almostWhite};
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
