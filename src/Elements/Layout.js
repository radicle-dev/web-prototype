import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AppHeader from '../Components/AppHeader';
import { colors } from '../Utils';

const Layout = props => (
  <AppContainer>
    <AppHeader />
    {props.children}
  </AppContainer>
);

Layout.defaultProps = {
  children: [],
};

Layout.propTypes = {
  children: PropTypes.array,
};

const AppContainer = styled.div`
  background-color: ${colors.white};
  font-family: GT America, Arial, Helvetica, sans-serif;
`;

export default Layout;
