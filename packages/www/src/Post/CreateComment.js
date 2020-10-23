import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useMutation} from '@apollo/client';
import Styled from 'styled-components';

import {useSession} from '../Application';
import {CreateCommentMutation} from './PostGQL';

const CreateCommentStyled = Styled.div`
  margin-top: 16px;

  textarea {
    width: 200px;
  }

  textarea, button {
    display: block;
    margin-bottom: 2px;
  }
`;

export default function CreateComment ({post}) {
  const session = useSession();
  const [body, setBody] = useState('');
  const [message, setMessage] = useState(null);

  const [mutate, {loading, error}] = useMutation(CreateCommentMutation);

  async function createComment (event) {
    event.preventDefault();
    setMessage('Creating');
    const result = await mutate({
      variables: {
        data: {
          body,
          post_id: post.id,
          author_id: session.user.id
        }
      }
    });
    if (result.error) {
      setMessage(error);
    } else {
      setBody('');
      setMessage(null);
    }
  }

  return (
    <CreateCommentStyled>
      <form
        onSubmit={createComment}
      >
        <textarea
          className="Body"
          placeholder="Comment"
          value={body}
          onChange={(event)=> {
            setBody(event.target.value);
          }}
        />
        <button
          type="submit"
          disabled={loading || !body}
        >
          Comment
        </button>
        <div className="Message">
          {message}
        </div>
      </form>
    </CreateCommentStyled>
  );
}

CreateComment.propTypes = {
  post: PropTypes.object
};
