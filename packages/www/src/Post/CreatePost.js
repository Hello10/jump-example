import React, {useState} from 'react';
import {useMutation} from '@apollo/client';
import Styled from 'styled-components';
import {useStateBlob} from '@hello10/jump-client';

import {useSession} from '../Application';
import {CreatePostMutation} from './PostGQL';

const CreatePostStyled = Styled.div`
  input, textarea {
    width: 200px;
  }
  input, textarea, button {
    display: block;
    margin-bottom: 2px;
  }
`;

export default function CreatePost () {
  const session = useSession();
  const [data, setData] = useStateBlob({
    title: '',
    body: '',
    author_id: session.user.id
  });
  const [message, setMessage] = useState(null);

  const [mutate, {loading, error}] = useMutation(CreatePostMutation);

  const valid = (data.title && data.body);

  async function createPost (event) {
    event.preventDefault();
    setMessage('Creating');
    const result = await mutate({
      variables: {
        data
      }
    });
    if (result.error) {
      setMessage(error);
    } else {
      setMessage(null);
      setData({
        title: '',
        body: ''
      });
    }
  }

  function inputProps (attr) {
    const value = data[attr];

    function onChange (event) {
      setData({
        [attr]: event.target.value
      });
    }

    return {
      onChange,
      value
    };
  }

  return (
    <CreatePostStyled>
      <form
        onSubmit={createPost}
      >
        <input
          className="Title"
          placeholder="Title"
          type="text"
          {...inputProps('title')}
        />
        <textarea
          className="Body"
          placeholder="Body"
          {...inputProps('body')}
        />
        <button
          type="submit"
          disabled={loading || !valid}
        >
          Post
        </button>
        <div className="Message">
          {message}
        </div>
      </form>
    </CreatePostStyled>
  );
}
