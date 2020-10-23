import gql from 'graphql-tag';

import {
  UserFragment,
  PostFragment,
  CommentFragment
} from '../Application';

export const GetPostQuery = gql`
  ${PostFragment}

  query getPost ($id: FirestoreId!) {
    getPost (id: $id) {
      ...PostFragment
    }
  }
`;

export const ListPostsQuery = gql`
  ${UserFragment}

  query listPosts {
    listPosts {
      id
      title
      body
      author {
        ...UserFragment
      }
      created_at
      updated_at
    }
  }
`;

export const CreatePostMutation = gql`
  ${PostFragment}

  mutation createPost ($data: CreatePost!) {
    createPost (data: $data) {
      ...PostFragment
    }
  }
`;

export const CreateCommentMutation = gql`
  ${CommentFragment}

  mutation createComment ($data: CreateComment!) {
    createComment (data: $data) {
      ...CommentFragment
    }
  }
`;
