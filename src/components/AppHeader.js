import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 8fr 1fr 1fr;
  grid-template-rows: 56px;
  height: 64px;
  color: white;
  border-radius: 3px;
  padding: 0 24px;
  align-items: center;
  > h1 {
    font-size: 1.5em;
    font-weight: bold;
  }
  > p {
    text-align: right;
    color: grey;
  }
`;
const Circle = styled.header`
  font-size: 6em; /* This controls the size. */
  display: inline-block;
  width: 0.4em;
  height: 0.4em;
  border: 0.03em solid white;
  position: relative;
  border-radius: 3em;
`;

const AppHeader = () => (
  <HeaderContainer>
    <Circle />
    <p>Issues</p>
    <p>Wallet</p>
  </HeaderContainer>
);

// AppHeader.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default AppHeader;
