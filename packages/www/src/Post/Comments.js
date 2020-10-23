import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import PostedBy from './PostedBy';

const CommentsStyled = Styled.div`
  margin-top: 16px;
  margin-left: 16px;

  .Comment {
    display: block;
    margin-bottom: 8px;
  }
`;

function Comment ({comment}) {
  const {author, created_at, body} = comment;

  return (
    <div className="Comment">
      <div className="Body">
        {body}
      </div>
      <PostedBy
        author={author}
        created_at={created_at}
      />
    </div>
  );
}
Comment.propTypes = {
  comment: PropTypes.object
};

export default function Comments ({comments, ...props}) {
  const $comments = comments.map((comment)=> (
    <Comment
      key={comment.id}
      comment={comment}
    />
  ));

  return (
    <CommentsStyled
      className="Comments"
      {...props}
    >
      {$comments}
    </CommentsStyled>
  );
}

Comments.propTypes = {
  comments: PropTypes.array
};
