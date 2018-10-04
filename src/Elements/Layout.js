import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AppHeader from '../Components/AppHeader';

const Layout = ({ children }) => (
  <Wrapper>
    <HeaderContainer>
      <AppHeader />
    </HeaderContainer>
    <MainContainer>{children}</MainContainer>
  </Wrapper>
);

Layout.defaultProps = {
  children: [],
};

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;

const HeaderContainer = styled.div`
  grid-area: hd;
`;
const MainContainer = styled.div`
  grid-area: main;
`;
const Wrapper = styled.div`
  display: grid;
  max-width: 1440px;
  margin: 0 auto;
  padding-bottom: 220px;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(84px, auto);
  grid-template-areas:
    'hd'
    'main';
`;
