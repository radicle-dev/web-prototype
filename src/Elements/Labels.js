import styled from 'styled-components';
import { colors } from '../Utils';

export const SmallLabel = styled.p`
  color: ${colors.green};
  font-size: 14px;
  border: 1px solid ${colors.green};
  border-radius: 2px;
  padding: 4px 8px;
  justify-self: end;
`;
export const BigLabel = styled.p`
  color: ${colors.red};
  border: 1px solid ${colors.red};
  border-radius: 4px;
  padding: 9px 12px;
  justify-self: end;
  height: 36px;
`;
