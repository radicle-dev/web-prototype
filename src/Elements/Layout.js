import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AppHeader from '../Components/AppHeader';

const Layout = ({ children, sidebar }) => (
  <Wrapper>
    <HeaderContainer>
      <AppHeader />
    </HeaderContainer>
    <SideBarContainer>{sidebar}</SideBarContainer>
    <MainContainer>{children}</MainContainer>
  </Wrapper>
);

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  sidebar: PropTypes.object.isRequired,
};

export default Layout;

const HeaderContainer = styled.div`
  grid-area: hd;
`;
const SideBarContainer = styled.div`
  grid-area: sd;
`;
const MainContainer = styled.div`
  grid-area: main;
`;
const Wrapper = styled.div`
  display: grid;
  max-width: 1440px;
  margin: 0 auto;
  padding-bottom: 220px;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(84px, auto);
  grid-template-areas:
    'hd hd hd hd hd hd'
    'sd main main main main main';
`;
