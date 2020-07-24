import React from 'react';

import {useRouter} from '../Application';

export default function GotoSettingsButton () {
  const router = useRouter();
  return (
    <button
      onClick={()=> {
        router.go('/settings');
      }}
      className="Settings"
    >
      settings
    </button>
  );
}
