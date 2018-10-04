import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SideBar from './SideBar';
import OrgOverview from './OrgOverview';
import OrgSource from './OrgSource';
import OrgMembers from './OrgMembers';
import { Layout } from '../Elements';

const OrgPage = ({ data, selectedView }) => {
  const sidebar = <SideBar org />;
  const content = () => {
    switch (selectedView) {
      case 'overview':
        return (
          <Fragment>
            <OrgOverview />
            <OrgSource repos={data.repos} />
            <OrgMembers members={data.users} />
          </Fragment>
        );
      case 'repositories':
        return <OrgSource repos={data.repos} />;
      case 'members':
        return <OrgMembers members={data.users} />;
      default:
        return null;
    }
  };
  return <Layout sidebar={sidebar}>{data && content()}</Layout>;
};

OrgPage.propTypes = {
  data: PropTypes.object.isRequired,
  selectedView: PropTypes.string.isRequired,
};

export default OrgPage;
