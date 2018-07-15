import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  padding: 0 16px;
  align-items: center;
  background-color: #21252b;
  height: 64px;
  margin: 0 auto;
  max-width: 100%;
`;

const Circle = styled.div`
  font-size: 1.5em; /* This controls the size. */
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 0.1em solid white;
  position: relative;
  border-radius: 3em;
`;
const ProjectPickerContainer = styled.div`
  display: grid;
  height: 36px;
  padding: 4px 16px;
  border: 1px solid white;
  border-radius: 4px;
  align-items: center;
`;

const TopBarMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  p > {
    padding-right: 24px;
  }
`;
const TopBarMenuItem = styled.p`
  padding-right: 24px;
`;

const ProjectPicker = props => (
  <ProjectPickerContainer>
    <div>{props.project}</div>
  </ProjectPickerContainer>
);

const TopBarMenu = () => (
  <TopBarMenuContainer>
    <TopBarMenuItem>Account</TopBarMenuItem>
    <TopBarMenuItem>Wallet</TopBarMenuItem>
    <Circle />
  </TopBarMenuContainer>
);

const AppHeader = () => (
  <HeaderContainer>
    <ProjectPicker project="oscoin" />
    <TopBarMenu />
  </HeaderContainer>
);

ProjectPicker.propTypes = {
  project: PropTypes.string.isRequired,
};

export default AppHeader;
