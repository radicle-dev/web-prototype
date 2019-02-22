import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import Timestamp from 'react-timestamp';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
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
  IssueLabel,
} from '../elements';
import { colors, elevation, mentionParser } from '../utils';

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
                    id
                  }
                }
              }
              comments(first: 30) {
                edges{
                  node {
                    author {
                      login
                      avatarUrl
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
          <>
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
                <SmallHeader>Description</SmallHeader>
                <IssueDesc>
                  <ReactMarkdown source={issue.body} />
                </IssueDesc>
                {issue.comments.edges.length > 0 &&
                  issue.comments.edges.map(comment => (
                    <Comment key={comment.node.id}>
                      <AvatarLarge src={comment.node.author.avatarUrl} />
                      <div>
                        <CommentBox>
                          <CommentMeta>
                            {comment.node.author.login}
                            <span> wrote </span>
                            <Timestamp time={comment.node.createdAt} />
                          </CommentMeta>
                          <ReactMarkdown source={comment.node.body} />
                        </CommentBox>
                      </div>
                    </Comment>
                  ))}
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
              </MainContainer>
              <SideContainer>
                <SmallHeader>Assignees</SmallHeader>
                <Assignees>
                  {issue.assignees.edges.length > 0 &&
                    issue.assignees.edges.map(assignee => (
                      <Avatar key={assignee.node.avatarUrl} src={assignee.node.avatarUrl} />
                    ))}
                  <AddNew>
                    <Icon name="plus" />
                  </AddNew>
                </Assignees>
                <SmallHeader>Labels</SmallHeader>
                <Labels>
                  {issue.labels.edges.length > 0 &&
                    issue.labels.edges.map(label => (
                      <IssueLabel key={label.node.id} labelColor={label.node.color}>
                        {label.node.name}
                      </IssueLabel>
                    ))}
                  <AddNew>
                    <Icon name="plus" />
                  </AddNew>
                </Labels>
              </SideContainer>
            </BodyContainer>
          </>
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
  color: ${colors.black};
  line-height: 125%;
  padding-bottom: 24px;
`;
const Author = styled.p`
  font-family: GTAmericaMedium;
  margin: 0 5px 0 8px;
`;
const Avatar = styled.img`
  height: 24px;
  width: 24px;
  border-radius: 4px;
  ${elevation[0]};
`;
const AvatarLarge = styled(Avatar)`
  height: 36px;
  width: 36px;
`;
const Comment = styled.div`
  display: flex;
  flex-direction: row;
`;
const CommentBox = styled.div`
  line-height: 125%;
  margin: 0 0 24px 16px;
  > p {
    &:hover:before {
      content: 'hi';
    }
  }
`;
const CommentMeta = styled.div`
  padding-bottom: 16px;
  color: ${colors.darkGrey};
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
  /* background-color: ${colors.almostWhite}; */
  color: ${colors.black};
  resize: none;
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
const Assignees = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
`;
const Labels = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`;
const AddNew = styled(PlusIcon)`
  height: 24px;
  width: 24px;
  border-color: ${colors.lightGrey};
`;
const BodyContainer = styled.div`
  display: grid;
  max-width: 1180px;
  margin-right: 24px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 130px auto;
  grid-gap: 24px;
  grid-template-areas:
    'main main main st'
    'main main main st';
`;
const MainContainer = styled(FloatingCard)`
  padding: 24px;
  margin: 0;
  grid-area: main;
`;
const SideContainer = styled(FloatingCard)`
  padding: 24px;
  margin: 0;
  grid-area: st;
`;
