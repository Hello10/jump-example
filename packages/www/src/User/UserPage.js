import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import {Posts, Comments} from '../Post';
import {GetUserForDisplayQuery} from './UserGQL';

const UserPageStyled = Styled.div`
`;

function User ({user}) {
  const {email, posts, comments} = user;
  return (
    <div className="User">
      <h1 className="Email">
        {email}
      </h1>
      <h2>
        Posts
      </h2>
      <Posts posts={posts}/>
      <h2>
        Comments
      </h2>
      <Posts posts={comments}/>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.object
};

export default function UserPage ({data}) {
  const user = data.getUser;
  return (
    <UserPageStyled className="UserPage">
      <User user={user}/>
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
