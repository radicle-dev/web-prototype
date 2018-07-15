import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from './Layout';

const Header = styled.header`
  margin-bottom: 40px;
  padding: 24px;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 40px 1fr;
  background-color: #21252b;
  border: 1px solid #1e1f30;
  border-radius: 3px;
  color: ${props => (props.topStyle ? 'grey' : 'white')};
  > p {
    text-align: center;
  }
`;

const RepoPage = props => (
  <Layout>
    <Header>
      <Link to="/">back</Link>
      <p>{props.match.params.repoId}</p>
    </Header>
  </Layout>
);

RepoPage.propTypes = {
  match: PropTypes.string.isRequired,
};
export default RepoPage;
