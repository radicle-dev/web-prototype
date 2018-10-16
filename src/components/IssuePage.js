import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import Timestamp from 'react-timestamp';
import styled from 'styled-components';
import GithubClient from '../github-graphql';
import SideBar from './SideBar';
import {
  Layout,
  BigHeader,
  SmallHeader,
  FloatingCard,
  CardHeader,
  SecondaryButton,
  PrimaryButton,
  Icon,
} from '../elements';
import { colors, elevation } from '../utils';

export default class IssuePage extends Component {
  state = {
    issue: null,
  };

  componentDidMount() {
    this.fetchIssue();
  }

  fetchIssue = async () => {
    const { match } = this.props;
    const response = await GithubClient.query({
      query: gql`
        query {
          repository(owner: "oscoin", name: ${match.params.repoId}) {
            issue(number: ${match.params.issueNumber}) {
              title
              number
              body
              author {
                login
                avatarUrl(size: 24)
              }
              createdAt
              id
              assignees(first: 5) {
                edges {
                  node {
                    avatarUrl(size: 24)
                  }
                }
              }
              labels(first: 10) {
                edges {
                  node {
                    color
                    description
                    name
                  }
                }
              }
              comments(first: 30) {
                edges{
                  node {
                    author {
                      login
                    }
                    body
                    createdAt
                    id
                  }
                }
              }
            }
          }
        }
      `,
    });

    this.setState({
      issue: response.data.repository.issue,
    });
    console.log(response.data.repository.issue);
  };

  render() {
    const { issue } = this.state;
    const { match } = this.props;
    return (
      <Layout sidebar={<SideBar repoId={match.params.repoId} />}>
        {issue && (
          <Fragment>
            <FloatingCard>
              <CardHeader>
                <div>
                  <IssueTitle>
                    <span>#{issue.number}</span>
                    {issue.title}
                  </IssueTitle>
                  <IssueMeta>
                    <Avatar src={issue.author.avatarUrl} />
                    <Author>{issue.author.login}</Author>
                    <span>
                      opened this issue <Timestamp time={issue.createdAt} />
                    </span>
                  </IssueMeta>
                </div>
                <div>
                  <SecondaryButton marginRight>Edit</SecondaryButton>
                  <PrimaryButton>New issue</PrimaryButton>
                </div>
              </CardHeader>
            </FloatingCard>
            <BodyContainer>
              <MainContainer>
                <FloatingSectionCard>
                  <SmallHeader>Description</SmallHeader>
                  <IssueDesc>{issue.body}</IssueDesc>
                </FloatingSectionCard>
                <FloatingSectionCard>
                  <SmallHeader>Comments</SmallHeader>
                  {issue.comments.edges.length > 0 && issue.comments.edges.map(comment => <p>{comment.node.body}</p>)}
                  <NewComment>
                    <AvatarLarge src="https://res.cloudinary.com/juliendonck/image/upload/v1536080565/avatars/2326909.jpg" />
                    <NewCommentInput
                      type="text"
                      name="comment"
                      placeholder="Add your comment here or drop files to attach them."
                      // onChange={}
                      // value={}
                      autoFocus
                    />
                  </NewComment>
                  <BtnContainer>
                    <PlusIcon>
                      <Icon name="plus" />
                    </PlusIcon>
                    <PrimaryButton marginLeft>Comment</PrimaryButton>
                  </BtnContainer>
                </FloatingSectionCard>
              </MainContainer>
              <SideTopContainer>
                <FloatingSectionCard>
                  <SmallHeader>Assignees</SmallHeader>
                  {issue.assignees.edges.length > 0 &&
                    issue.assignees.edges.map(assignee => (
                      <Avatar key={assignee.node.avatarUrl} src={assignee.node.avatarUrl} />
                    ))}
                </FloatingSectionCard>
              </SideTopContainer>
              <SideBottomContainer>
                <FloatingSectionCard>
                  <SmallHeader>Labels</SmallHeader>
                  {issue.labels.edges.length > 0 &&
                    issue.labels.edges.map(label => <Label color={label.node.color}>{label.node.name}</Label>)}
                </FloatingSectionCard>
              </SideBottomContainer>
            </BodyContainer>
          </Fragment>
        )}
      </Layout>
    );
  }
}
IssuePage.propTypes = {
  match: PropTypes.object.isRequired,
};
const IssueTitle = styled(BigHeader)`
  font-family: GTAmericaMedium;
  > span {
    color: ${colors.grey};
    margin-right: 8px;
  }
`;

const IssueMeta = styled.h3`
  color: ${colors.darkGrey};
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;
const IssueDesc = styled.p`
  color: ${colors.darkGrey};
  line-height: 125%;
`;
const Author = styled.p`
  font-family: GTAmericaMedium;
  margin: 0 5px 0 8px;
`;
const AvatarLarge = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 4px;
  ${elevation[0]};
`;
const Avatar = styled.img`
  height: 24px;
  width: 24px;
  border-radius: 4px;
  ${elevation[0]};
`;
const NewComment = styled.div`
  display: flex;
  flex-direction: row;
`;
const NewCommentInput = styled.textarea`
  flex: 1;
  line-height: 125%;
  padding: 12px 16px;
  margin-left: 16px;
  min-height: 96px;
  min-width: 540px;
  border: 1px solid ${colors.lightGrey};
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  background-color: ${colors.almostWhite};
  color: ${colors.black};
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;
const PlusIcon = styled.div`
  border: 1px solid ${colors.grey};
  border-radius: 4px;
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MainContainer = styled.div`
  grid-area: main;
`;
const SideTopContainer = styled.div`
  grid-area: st;
`;
const SideBottomContainer = styled.div`
  grid-area: sb;
`;
const BodyContainer = styled.div`
  display: grid;
  max-width: 1156px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(60px, auto);
  grid-template-areas:
    'main main main st'
    'main main main sb';
`;
const Label = styled.span`
  ${({ color }) =>
    color &&
    `
    background-color: #${color};
  `};
  font-family: GTAmericaMedium;
  padding: 2px 8px 4px 8px;
  border-radius: 2px;
  height: 28px;
  color: ${colors.white};
  white-space: nowrap;
`;

const FloatingSectionCard = styled(FloatingCard)`
  padding: 24px;
`;
