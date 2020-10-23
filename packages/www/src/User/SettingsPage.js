import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import {useMutation} from '@apollo/client';
import {useStateBlob} from '@hello10/jump-client';

import {useRouter} from '../Application';
import {
  GetUserForEditQuery,
  UpdateUserMutation
} from './UserGQL';

const SettingsPageStyled = Styled.div`
  input, textarea {
    display: block;
    width: 300px;
    margin-bottom 10px;
    font-family: Helvetica;
  }
`;

export default function SettingsPage ({data: {getUser: user}}) {
  const router = useRouter();

  const [
    updateUser,
    {loading: mutation_loading}
  ] = useMutation(UpdateUserMutation);

  const [edited, setEdited] = useStateBlob({});
  const [update, setUpdate] = useStateBlob({});

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

  const attrs = ['catchphrase', 'description'];
  const data = {};
  for (const attr of attrs) {
    if (edited[attr]) {
      data[attr] = update[attr];
    } else {
      data[attr] = user[attr];
    }
  }

  return (
    <SettingsPageStyled>
      <h1>
        Edit <span
          onClick={(event)=> {
            event.preventDefault();
            router.go(`/users/${user.id}`);
          }}
        >
          {user.email}
        </span>
      </h1>
      <form
        onSubmit={(event)=> {
          event.preventDefault();
          updateUser({
            variables: {
              id: user.id,
              data
            }
          });
        }}
      >
        <input
          className="Catchphrase"
          type="text"
          value={data.catchphrase || ''}
          onChange={setUpdateField('catchphrase')}
          placeholder="Catchphrase"
        />
        <textarea
          className="Description"
          onChange={setUpdateField('description')}
          placeholder="Description"
          value={data.description || ''}
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

SettingsPage.propTypes = {
  data: PropTypes.object
};

SettingsPage.query = function query ({user}) {
  return {
    query: GetUserForEditQuery,
    variables: {
      id: user.id
    }
  };
};
