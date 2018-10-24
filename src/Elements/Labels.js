import styled from 'styled-components';
import { colors } from '../utils';

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
  padding: 7px 12px 4px 12px;
  justify-self: end;
  height: 36px;
  font-family: GTAmericaMedium;
`;

export const IssueLabel = styled.span`
  ${({ labelColor }) =>
    labelColor &&
    `
    background-color: #${labelColor};
    color: ${colors.invertColor(labelColor, true)};
  `};
  font-family: GTAmericaMedium;
  padding: 2px 8px 4px 8px;
  border-radius: 2px;
  height: 24px;
  white-space: nowrap;
  margin-right: 8px;
`;
