import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import {useRouter} from '../Application';
import Comments from './Comments';
import PostedBy from './PostedBy';

const PostStyled = Styled.div`
  .Title {
    font-size: 20px;
  }
`;

export default function Post ({post}) {
  const router = useRouter();

  const {id, title, body, created_at, author, comments} = post;

  return (
    <PostStyled className="Post">
      <div
        className="Title"
        onClick={()=> {
          router.go(`/posts/${id}`);
        }}
      >
        {title}
      </div>
      <div className="Body">
        {body}
      </div>
      <PostedBy
        author={author}
        created_at={created_at}
      />
      {comments && (
        <Comments comments={comments}/>
      )}
    </PostStyled>
  );
}

Post.propTypes = {
  post: PropTypes.object
};
