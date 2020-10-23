import React from 'react';

import {RouteButton} from '../Application';

export default function GotoDerpButton () {
  return (
    <RouteButton
      route={()=> {
        const count = Math.ceil(Math.random() * 10);
        return `/derp/derp/${count}`;
      }}
      className="Derp"
    >
      derp
    </RouteButton>
  );
}
