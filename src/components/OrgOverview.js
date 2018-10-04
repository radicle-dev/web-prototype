import React from 'react';
import styled from 'styled-components';
import { BigHeader, FloatingCard, CardHeader } from '../Elements';
import { elevation, colors } from '../Utils';

const OrgOverview = () => (
  <FloatingCard>
    <CardHeader>
      <OrgLogo />
      <div>
        <BigHeader>oscoin</BigHeader>
        <OrgDesc>
          In hac habitasse platea dictumst. Suspendisse potenti. Vestibulum sollicitudin blandit mi, eget tincidunt diam
          maximus vel. Pellentesque luctus mauris rhoncus, aliquam nunc molestie, consectetur eros. In hac habitasse
          platea dictumst. Suspendisse potenti. Vestibulum sollicitudin blandit mi, eget tincidunt diam maximus vel.
          Pellentesque luctus mauris rhoncus, aliquam nunc molestie, consectetur eros.
        </OrgDesc>
      </div>
    </CardHeader>
  </FloatingCard>
);

const OrgLogo = styled.div`
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
