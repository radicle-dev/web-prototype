import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../Utils';
import { Icon } from '.';

const Select = ({ children }) => (
  <SelectContainer>
    <p>{children}</p>
    <Icon name="carrot" />
  </SelectContainer>
);

Select.propTypes = {
  children: PropTypes.string.isRequired,
};

const SelectContainer = styled.div`
  display: flex;
  height: 36px;
  border-radius: 4px;
  border: 1px solid ${colors.lightGrey};
  background-color: ${colors.almostWhite};
  padding: 0 8px 0 12px;
  align-items: center;
  ${({ margin }) =>
    margin &&
    `
    margin-right: 16px;
  `};
  > p {
    font-family: GTAmericaMedium;
    color: ${colors.darkGrey};
    margin-right: 6px;
    padding-bottom: 4px;
  }
`;
export default Select;
