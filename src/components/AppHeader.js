import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Toggle, colors } from '../Utils';

const ProjectPicker = () => (
  <ProjectPickerContainer>
    <Toggle>
      {({ on, toggle }) => (
        <Fragment>
          <button onClick={toggle}>oscoin</button>
          {on && (
            <Dropdown>
              <NavItem activeClassName="active" to="/">
                oscoin
              </NavItem>
              <NavItem activeClassName="active" to="/juliendonck">
                juliendonck
              </NavItem>
              <NavItem activeClassName="active" to="/daimler">
                daimler
              </NavItem>
            </Dropdown>
          )}
        </Fragment>
      )}
    </Toggle>
  </ProjectPickerContainer>
);

const TopBarMenu = () => (
  <TopBarMenuContainer>
    <p>Account</p>
    <p>Wallet</p>
    <Circle />
  </TopBarMenuContainer>
);

const AppHeader = () => (
  <HeaderContainer>
    <ProjectPicker />
    <TopBarMenu />
  </HeaderContainer>
);

ProjectPicker.propTypes = {
  project: PropTypes.string.isRequired,
};

const NavItem = styled(NavLink)`
  margin: 5px;
  &.active {
    color: ${colors.blue};
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${colors.white};
  padding: 0 24px;
  align-items: center;
  background-color: ${colors.almostBlack};
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
const Dropdown = styled.nav`
  background-color: ${colors.darkGrey};
  display: flex;
  flex-direction: column;
  z-index: 10;
`;
const ProjectPickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 36px;
  padding: 4px 16px;
  border: 1px solid white;
  border-radius: 3px;
  justify-content: center;
`;

const TopBarMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > p {
    padding-right: 24px;
  }
`;

export default AppHeader;
