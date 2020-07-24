import React from 'react';

import {useRouter} from '../Application';

export default function GotoDerpButton () {
  const router = useRouter();
  return (
    <button
      onClick={()=> {
        const count = Math.ceil(Math.random() * 10);
        console.log(`/derp/derp/${count}`);
        router.go(`/derp/derp/${count}`);
      }}
      className="derp"
    >
      derp
    </button>
  );
}
