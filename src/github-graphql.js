import ApolloClient from 'apollo-boost';

export default new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: 'Bearer 4c72eec92fc3f95912b02a91cc4a29ac118a12a7',
  },
});
