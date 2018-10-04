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
            <OrgOverview orgName={data.name} orgIcon={data.avatarUrl} orgDesc={data.description} />
            <OrgSource repos={data.repositories.nodes} />
            <OrgMembers members={data.members.nodes} />
          </Fragment>
        );
      case 'repositories':
        return <OrgSource repos={data.repositories.nodes} />;
      case 'members':
        return <OrgMembers members={data.members.nodes} />;
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
