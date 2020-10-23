import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import {ListPostsQuery} from './PostGQL';
import Posts from './Posts';
import CreatePost from './CreatePost';

const PostsPageStyled = Styled.div`
`;

export default function PostsPage ({data}) {
  const posts = data.listPosts;

  return (
    <PostsPageStyled className="PostsPage">
      <CreatePost/>
      <Posts posts={posts}/>
    </PostsPageStyled>
  );
}

PostsPage.propTypes = {
  data: PropTypes.object
};

PostsPage.query = function query () {
  return {
    query: ListPostsQuery
  };
};
