import React from 'react';
import styled from 'styled-components';
import { purple } from './colors';

export default body => {
  const parts = body.split(/\B(@[a-z0-9._-]+)/);
  for (let i = 1; i < parts.length; i += 2) {
    parts[i] = <Mention key={i}>{parts[i]}</Mention>;
  }
  return <>{parts}</>;
};

const Mention = styled.a`
  color: ${purple};
`;
