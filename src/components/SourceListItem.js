import React from 'react';
import { Link } from 'react-router-dom';
import Timestamp from 'react-timestamp';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../Utils';
import { Icon } from '../Elements';

const SourceListItem = ({ name, oid, type, description, updatedAt, repo }) => {
  const icon = () => {
    switch (type) {
      case 'tree':
        return <Icon name="folder" />;
      case 'blob':
        return <Icon name="file" />;
      default:
    }
  };
  return (
    <ListItem to={`/repo/${repo}/tree/${name}`} id={oid}>
      <Name>
        {icon(type)}
        <h3>{name}</h3>
      </Name>
      <p>{description}</p>
      <Stats>
        <Timestamp time={updatedAt} />
      </Stats>
    </ListItem>
  );
};

SourceListItem.defaultProps = {
  type: 'blob',
  description: '',
  updatedAt: '',
};

SourceListItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  oid: PropTypes.string.isRequired,
  updatedAt: PropTypes.string,
  type: PropTypes.string,
  repo: PropTypes.string.isRequired,
};

const ListItem = styled(Link)`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 2fr 5fr 1fr;
  grid-template-rows: 48px;
  color: ${colors.darkGrey};
  padding: 0 24px;
  align-items: center;
  > div h3,
  p {
    padding-bottom: 5px;
  }
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
