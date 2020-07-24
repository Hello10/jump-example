import React from 'react';
import Styled from 'styled-components';
import gql from 'graphql-tag';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {useStateBlob} from '@hello10/jump-client';
import {omitTypename} from '@hello10/jump-util';
import {useSession} from '../Application';

const SettingsPageStyled = Styled.div`
  input, textarea {
    display: block;
    width: 300px;
    margin-bottom 10px;
    font-family: Helvetica;
  }
`;

const GET_USER = gql`
  query getUser ($id: String!) {
    getUser (id: $id) {
      catchphrase
      description
    }
  }
`;

const UPDATE_USER = gql`
  mutation UpdateUser ($id: String!, $data: UserUpdate!) {
    updateUser (id: $id, data: $data) {
      catchphrase
      description
    }
  }
`;

export default function SettingsPage () {
  const session = useSession();
  const user_id = session.user.id;

  const {loading, error, data} = useQuery(
    GET_USER,
    {
      variables: {
        id: user_id
      }
    }
  );

  const [
    updateUser,
    {loading: mutation_loading}
  ] = useMutation(UPDATE_USER);

  const [edited, setEdited] = useStateBlob({});
  const [update, setUpdate] = useStateBlob({});

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  function setUpdateField (name) {
    return function set (event) {
      setEdited({
        [name]: true
      });
      setUpdate({
        [name]: event.target.value
      });
    };
  }

  const user = omitTypename({...data.getUser});
  for (const attr of Object.keys(user)) {
    if (edited[attr]) {
      user[attr] = update[attr];
    }
  }

  return (
    <SettingsPageStyled>
      <form
        onSubmit={(event)=> {
          event.preventDefault();
          updateUser({
            variables: {
              id: user_id,
              data: user
            }
          });
        }}
      >
        <input
          className="Catchphrase"
          type="text"
          value={user.catchphrase || ''}
          onChange={setUpdateField('catchphrase')}
          placeholder="Catchphrase"
        />
        <textarea
          className="Description"
          onChange={setUpdateField('description')}
          placeholder="Description"
          value={user.description || ''}
        />
        <button
          type="submit"
          disabled={mutation_loading}
        >
          Update!
        </button>
      </form>
    </SettingsPageStyled>
  );
}
