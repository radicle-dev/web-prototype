import React from 'react';
import styled from 'styled-components';
import { colors } from '../Utils';
import { Icon } from '../Elements';

const SideBar = () => (
  <SideBarContainer>
    <li>
      <SideBarItem>
        <Icon name="overview" />
        <p>Overview</p>
      </SideBarItem>
    </li>
    <li>
      <SideBarItem>
        <Icon name="source" />
        <p>Source</p>
      </SideBarItem>
    </li>
    <li>
      <SideBarItem>
        <Icon name="commits" />
        <p>Commits</p>
      </SideBarItem>
    </li>
    <li>
      <SideBarItem>
        <Icon name="branches" />
        <p>Branches</p>
      </SideBarItem>
    </li>
    <li>
      <SideBarItem>
        <Icon name="issues" />
        <p>Issues</p>
      </SideBarItem>
    </li>
    <li>
      <SideBarItem>
        <Icon name="revisions" />
        <p>Revisions</p>
      </SideBarItem>
    </li>
    <li>
      <SideBarItem>
        <Icon name="settings" />
        <p>Settings</p>
      </SideBarItem>
    </li>
  </SideBarContainer>
);

const SideBarContainer = styled.ul`
  margin-top: 16px;
  padding: 0 24px;
  > li {
    margin-bottom: 16px;
  }
`;

const SideBarItem = styled.button`
  display: flex;
  flex-direction: row;
  height: 24px;
  align-items: center;
  color: ${colors.darkGrey};
  > p {
    padding-left: 16px;
  }
  &:hover {
    text-decoration: underline;
    color: ${colors.purple};
  }
`;

export default SideBar;