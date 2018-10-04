import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Toggle, colors, elevation } from '../Utils';
import { Icon } from '../Elements';

const ProjectPicker = () => (
  <ProjectPickerContainer>
    <Toggle>
      {({ on, toggle }) => (
        <Fragment>
          <ProjectPickerButton onClick={toggle}>
            <OrgIcon />
            oscoin
            <Icon name="carrot" />
          </ProjectPickerButton>
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
    <p>Inbox (36)</p>
    <p>Wallet</p>
    <Circle src="https://res.cloudinary.com/juliendonck/image/upload/v1536080565/avatars/2326909.jpg" />
  </TopBarMenuContainer>
);

const AppHeader = () => (
  <HeaderContainer>
    <ProjectPicker />
    <TopBarMenu />
  </HeaderContainer>
);

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
  padding: 24px;
  align-items: center;
  height: 84px;
  max-width: 100%;
`;

const Circle = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  ${elevation[0]};
`;
const Dropdown = styled.nav`
  background-color: ${colors.almostWhite};
  display: flex;
  flex-direction: column;
  z-index: 10;
  padding: 12px;
  border: 1px solid ${colors.lightGrey};
  border-radius: 4px;
  margin-top: 8px;
  ${elevation[0]};
`;
const ProjectPickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 36px;
`;

const ProjectPickerButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
`;

const OrgIcon = styled.div`
  height: 36px;
  width: 36px;
  background-color: ${colors.white};
  border-radius: 3px;
  margin-right: 12px;
  ${elevation[0]};
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
