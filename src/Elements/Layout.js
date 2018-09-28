import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AppHeader from '../Components/AppHeader';
import SideBar from '../Components/SideBar';

const Layout = props => (
  <Wrapper>
    <HeaderContainer>
      <AppHeader />
    </HeaderContainer>
    <SideBarContainer>
      <SideBar />
    </SideBarContainer>
    <ContentContainer>{props.children}</ContentContainer>
  </Wrapper>
);

Layout.defaultProps = {
  children: [],
};

Layout.propTypes = {
  children: PropTypes.array,
};

export default Layout;

const HeaderContainer = styled.div`
  grid-area: hd;
`;
const SideBarContainer = styled.div`
  grid-area: sd;
`;
const ContentContainer = styled.div`
  grid-area: main;
`;
const Wrapper = styled.div`
  display: grid;
  max-width: 1440px;
  margin: 0 auto;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(84px, auto);
  grid-template-areas:
    'hd hd hd hd hd hd'
    'sd main main main main main';
`;
