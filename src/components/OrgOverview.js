import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BigHeader, FloatingCard } from '../elements';
import { elevation, colors } from '../utils';

const OrgOverview = ({ orgName, orgDesc, orgIcon }) => (
  <FloatingCard>
    <OverviewContainer>
      <OrgLogo src={orgIcon} />
      <div>
        <BigHeader>{orgName}</BigHeader>
        <OrgDesc>{orgDesc}</OrgDesc>
      </div>
    </OverviewContainer>
  </FloatingCard>
);

OrgOverview.propTypes = {
  orgName: PropTypes.string.isRequired,
  orgDesc: PropTypes.string.isRequired,
  orgIcon: PropTypes.string.isRequired,
};

const OverviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 24px;
`;
const OrgLogo = styled.img`
  min-height: 72px;
  min-width: 72px;
  max-height: 72px;
  max-width: 72px;
  border-radius: 4px;
  ${elevation[0]};
  margin-right: 24px;
`;
const OrgDesc = styled.p`
  margin-top: 12px;
  line-height: 150%;
  color: ${colors.darkGrey};
`;

export default OrgOverview;
