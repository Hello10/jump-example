import gql from 'graphql-tag';

import {
  UserFragment,
  PostFragment,
  CommentFragment
} from '../Application';

export const GetUserForEditQuery = gql`
  ${UserFragment}

  query getUserForEdit ($id: FirestoreId!) {
    getUser (id: $id) {
      ...UserFragment
    }
  }
`;

export const GetUserForDisplayQuery = gql`
  ${UserFragment}
  ${PostFragment}
  ${CommentFragment}

  query getUserForDisplay ($id: FirestoreId!) {
    getUser (id: $id) {
      ...UserFragment
      posts {
        ...PostFragment
      }
      comments {
        ...CommentFragment
      }
    }
  }
`;

export const ListUsersQuery = gql`
  ${UserFragment}

  query listUsers {
    listUsers {
      ...UserFragment
    }
  }
`;

export const UpdateUserMutation = gql`
  ${UserFragment}
  mutation updateUser ($id: FirestoreId!, $data: UpdateUser!) {
    updateUser (id: $id, data: $data) {
      ...UserFragment
    }
  }
`;
