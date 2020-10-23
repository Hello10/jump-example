import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import {GetPostQuery} from './PostGQL';
import Post from './Post';
import CreateComment from './CreateComment';

const PostPageStyled = Styled.div`
`;

export default function PostPage ({data}) {
  const post = data.getPost;
  return (
    <PostPageStyled className="PostPage">
      <Post post={post}/>
      <CreateComment post={post}/>
    </PostPageStyled>
  );
}

PostPage.propTypes = {
  data: PropTypes.object
};

PostPage.query = function query ({params}) {
  return {
    query: GetPostQuery,
    variables: {
      id: params.id
    }
  };
};
