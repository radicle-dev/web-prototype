import styled from 'styled-components';
import { colors } from '../Utils';

export const BigHeader = styled.div`
  color: ${colors.black};
  font-size: 24px;
  font-weight: bold;
  line-height: 32px;
`;
export const MediumHeader = styled.div`
  color: ${colors.black};
  font-size: 18px;
  font-weight: bold;
`;
export const SmallHeader = styled.div`
  color: ${colors.black};
  font-size: 16px;
  font-weight: bold;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
`;
