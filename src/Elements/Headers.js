import styled from 'styled-components';
import { colors } from '../utils';

export const BigHeader = styled.h1`
  font-family: GTAmericaBold;
  color: ${colors.black};
  font-size: 24px;
  line-height: 32px;
  height: 36px;
`;
export const MediumHeader = styled.h2`
  font-family: GTAmericaBold;
  color: ${colors.black};
  font-size: 18px;
`;
export const SmallHeader = styled.h3`
  font-family: GTAmericaMedium;
  color: ${colors.darkGrey};
  font-size: 16px;
  padding-bottom: 16px;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
  ${({ underline }) =>
    underline &&
    `
    border-bottom: 1px solid ${colors.lightGrey};
  `};
`;
