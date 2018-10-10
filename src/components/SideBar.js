import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../utils';
import { Icon } from '../elements';

const SideBar = ({ org, repoId }) => (
  <SideBarContainer>
    {org ? (
      <Fragment>
        <li>
          <SideBarItem activeClassName="active" to="/overview">
            <Icon name="overview" />
            <p>Overview</p>
          </SideBarItem>
        </li>
        <li>
          <SideBarItem activeClassName="active" to="/repositories">
            <Icon name="source" />
            <p>Repositories</p>
          </SideBarItem>
        </li>
        <li>
          <SideBarItem activeClassName="active" to="/members">
            <Icon name="members" />
            <p>Members</p>
          </SideBarItem>
        </li>
        <li>
          <SideBarItem activeClassName="active" to="/settings">
            <Icon name="settings" />
            <p>Settings</p>
          </SideBarItem>
        </li>
      </Fragment>
    ) : (
      <Fragment>
        <li>
          <SideBarItem activeClassName="active" to={`/repo/${repoId}/overview`}>
            <Icon name="overview" />
            <p>Overview</p>
          </SideBarItem>
        </li>
        <li>
          <SideBarItem activeClassName="active" to={`/repo/${repoId}/source`}>
            <Icon name="source" />
            <p>Source</p>
          </SideBarItem>
        </li>
        <li>
          <SideBarItem activeClassName="active" to={`/repo/${repoId}/commits`}>
            <Icon name="commits" />
            <p>Commits</p>
          </SideBarItem>
        </li>
        <li>
          <SideBarItem activeClassName="active" to={`/repo/${repoId}/branches`}>
            <Icon name="branches" />
            <p>Branches</p>
          </SideBarItem>
        </li>
        <li>
          <SideBarItem activeClassName="active" to={`/repo/${repoId}/issues`}>
            <Icon name="issues" />
            <p>Issues</p>
          </SideBarItem>
        </li>
        <li>
          <SideBarItem activeClassName="active" to={`/repo/${repoId}/revisions`}>
            <Icon name="revisions" />
            <p>Revisions</p>
          </SideBarItem>
        </li>
        <li>
          <SideBarItem activeClassName="active" to={`/repo/${repoId}/settings`}>
            <Icon name="settings" />
            <p>Settings</p>
          </SideBarItem>
        </li>
      </Fragment>
    )}
  </SideBarContainer>
);

SideBar.defaultProps = {
  org: false,
  repoId: '',
};
SideBar.propTypes = {
  org: PropTypes.bool,
  repoId: PropTypes.string,
};

const SideBarContainer = styled.ul`
  margin-top: 16px;
  padding: 0 24px;
  > li {
    margin-bottom: 16px;
  }
`;

const SideBarItem = styled(NavLink)`
  display: flex;
  flex-direction: row;
  height: 24px;
  align-items: center;
  color: ${colors.darkGrey};
  > p {
    padding: 0 0 4px 16px;
  }
  &:hover {
    text-decoration: underline;
    color: ${colors.purple};
  }
  &.active {
    color: ${colors.purple};
    font-family: GTAmericaBold;
  }
`;

export default SideBar;
