import styled from 'styled-components';
import { colors, elevation } from '../Utils';

export const FloatingCard = styled.div`
  background-color: white;
  border-radius: 4px;
  ${elevation[1]};
  margin-bottom: 24px;
  margin-right: 24px;
`;
export const OutlineCard = styled.div`
  background-color: white;
  border: 1px solid ${colors.lightGrey}
  border-radius: 4px;
`;
