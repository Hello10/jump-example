import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import {useRouter} from '../Application';

const PostedByStyled = Styled.div`
  font-size: 12px;

  .Author {
    cursor: pointer;
    display: inline-block;
    margin-left: 2px;
    margin-right: 2px;
    text-decoration: underline;
  }
`;

function Author ({author}) {
  const router = useRouter();
  const {id, email} = author;
  return (
    <div
      className="Author"
      onClick={()=> {
        router.go(`/users/${id}`);
      }}
    >
      {email}
    </div>
  );
}
Author.propTypes = {
  author: PropTypes.object
};

export default function PostedBy ({author, created_at}) {
  return (
    <PostedByStyled className="PostedBy">
      Posted by <Author author={author}/> at {created_at}
    </PostedByStyled>
  );
}

PostedBy.propTypes = {
  author: PropTypes.object,
  created_at: PropTypes.string
};
