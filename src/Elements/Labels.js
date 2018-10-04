import styled from 'styled-components';
import { colors } from '../Utils';

export const SmallLabel = styled.p`
  color: ${colors.green};
  font-size: 14px;
  border: 1px solid ${colors.green};
  border-radius: 2px;
  padding: 4px 8px 6px 8px;
  justify-self: end;
  font-family: GTAmericaMedium;
`;
export const BigLabel = styled.p`
  ${({ pass }) =>
    pass
      ? `
      color: ${colors.green};
      border: 1px solid ${colors.green};
    `
      : `
      color: ${colors.orange};
      border: 1px solid ${colors.orange};
    `};

  border-radius: 4px;
  padding: 10px 12px;
  justify-self: end;
  height: 36px;
  font-family: GTAmericaBold;
`;
