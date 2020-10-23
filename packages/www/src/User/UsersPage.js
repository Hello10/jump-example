import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import {useRouter} from '../Application';
import {ListUsersQuery} from './UserGQL';

const UsersPageStyled = Styled.div`
  button {
    display: block;
  }
`;

function User ({user}) {
  const router = useRouter();
  const {id, email} = user;
  return (
    <button
      className="User"
      onClick={()=> router.go(`/users/${id}`)}
    >
      {email}
    </button>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    email: PropTypes.String
  })
};

export default function UsersPage ({data: {listUsers}}) {
  const $users = listUsers.map((user)=> {
    return (
      <User
        key={user.id}
        user={user}
      />
    );
  });
  return (
    <UsersPageStyled className="UsersPage">
      {$users}
    </UsersPageStyled>
  );
}

UsersPage.propTypes = {
  data: PropTypes.object
};

UsersPage.query = function query () {
  return {
    query: ListUsersQuery
  };
};
