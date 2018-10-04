import styled from 'styled-components';
import { colors } from '../Utils';

export const BigHeader = styled.div`
  font-family: GTAmericaBold;
  color: ${colors.black};
  font-size: 24px;
  line-height: 32px;
`;
export const MediumHeader = styled.div`
  font-family: GTAmericaBold;
  color: ${colors.black};
  font-size: 18px;
`;
export const SmallHeader = styled.div`
  color: ${colors.black};
  font-size: 16px;
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
