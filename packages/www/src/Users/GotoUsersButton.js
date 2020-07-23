import React from 'react';

import {useRouter} from '../Application';

export default function GotoUsersButton () {
  const router = useRouter();
  return (
    <button
      onClick={()=> {
        router.go('/users');
      }}
      className="Users"
    >
      users
    </button>
  );
}
