import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import gql from 'graphql-tag';

const UsersPageStyled = Styled.div`
`;

function User ({user}) {
  const {id, email} = user;
  return (
    <div className="User">
      {id} {email}
    </div>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    email: PropTypes.String
  })
};

export default function UsersPage ({listUsers}) {
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
  listUsers: PropTypes.arrayOf(PropTypes.object)
};

UsersPage.query = function query () {
  return {
    query: gql`
      query listUsers {
        listUsers {
          id
          email
        }
      }
    `
  };
};
