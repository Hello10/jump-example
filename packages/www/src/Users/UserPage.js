import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import {GetUserForDisplayQuery} from './UserGQL';

const UserPageStyled = Styled.div`
`;

export default function UserPage ({data}) {
  const user = data.getUser;
  return (
    <UserPageStyled className="UsersPage">
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
    </UserPageStyled>
  );
}

UserPage.propTypes = {
  data: PropTypes.object
};

UserPage.query = function query ({params}) {
  return {
    query: GetUserForDisplayQuery,
    variables: {
      id: params.id
    }
  };
};
