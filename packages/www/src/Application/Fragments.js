import gql from 'graphql-tag';

export const UserFragment = gql`
  fragment UserFragment on User {
    id
    email
    catchphrase
    description
  }
`;

export const CommentFragment = gql`
  ${UserFragment}

  fragment CommentFragment on Comment {
    id
    body
    post_id
    author {
      ...UserFragment
    }
  }
`;

export const PostFragment = gql`
  ${UserFragment}
  ${CommentFragment}

  fragment PostFragment on Post {
    id
    title
    body
    created_at
    updated_at
    author {
      ...UserFragment
    }
    comments {
      ...CommentFragment
    }
  }
`;
