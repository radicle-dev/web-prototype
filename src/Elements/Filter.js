import styled from 'styled-components';
import { colors } from '../utils';

export default styled.input`
  height: 36px;
  width: 160px;
  border: 1px solid ${colors.lightGrey};
  border-radius: 4px;
  background-color: ${colors.almostWhite};
  padding: 0 12px 4px 12px;
  color: ${colors.darkGrey};
  ${({ margin }) =>
    margin &&
    `
    margin-right: 16px;
  `};
`;
