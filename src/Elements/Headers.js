import styled from 'styled-components';
import { colors } from '../Utils';

export const ProjectHeader = styled.div`
  padding: 16px;
  margin: 16px auto 16px;
  max-width: 100%;
  color: ${colors.black};
  font-size: 18px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;
