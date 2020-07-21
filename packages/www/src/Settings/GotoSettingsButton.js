import React from 'react';

import {useRouter} from '../Application';

export default function GotoSettingsButton () {
  const router = useRouter();
  return (
    <button
      onClick={()=> {
        const count = Math.ceil(Math.random() * 10);
        router.go(`/settings/${count}`);
      }}
      className="Settings"
    >
      settings
    </button>
  );
}
