import React from 'react';
import { Link } from 'react-router-dom';
import Timestamp from 'react-timestamp';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../Utils';
import { Icon } from '../Elements';

const SourceListItem = props => {
  const icon = type => {
    switch (type) {
      case 'dir':
        return <Icon name="folder" />;
      case 'file':
        return <Icon name="file" />;
      default:
        return <Icon name="source" />;
    }
  };
  return (
    <ListItem to={`/repo/${props.name}`} id={props.id}>
      <Name>
        {icon(props.type)}
        <h3>{props.name}</h3>
      </Name>
      <p>{props.description}</p>
      <Stats>
        <Timestamp time={props.last_updated} />
      </Stats>
    </ListItem>
  );
};

SourceListItem.defaultProps = {
  type: 'source',
};

SourceListItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  last_updated: PropTypes.string.isRequired,
  type: PropTypes.string,
};

const ListItem = styled(Link)`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 2fr 5fr 1fr;
  grid-template-rows: 48px;
  color: ${colors.darkGrey};
  padding: 0 24px;
  align-items: center;
  &:hover {
    background-color: ${colors.almostWhite};
    > div h3 {
      text-decoration: underline;
      color: ${colors.purple};
    }
  }
`;
const Name = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > h3 {
    color: ${colors.black};
    align-items: center;
    margin-left: 4px;
  }
`;
const Stats = styled.p`
  text-align: right;
`;
export default SourceListItem;
