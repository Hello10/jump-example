import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import Post from './Post';

const PostsStyled = Styled.div`
  margin-top: 16px;

  .Post {
    display: block;
    margin-bottom: 8px;
  }
`;

export default function Posts ({posts, ...props}) {
  const $posts = posts.map((post)=> (
    <Post
      key={post.id}
      post={post}
    />
  ));

  return (
    <PostsStyled
      className="Posts"
      {...props}
    >
      {$posts}
    </PostsStyled>
  );
}

Posts.propTypes = {
  posts: PropTypes.array
};
