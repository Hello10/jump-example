import React from 'react';
import Styled from 'styled-components';

import {useSession, useRouter} from '../Application';
import {GotoDerpButton} from '../Derp';
import {
  GotoSettingsButton,
  GotoUsersButton
} from '../Users';

const HomePageStyled = Styled.div`
  .Buttons {
    display: block;
    margin-top: 10px;
    button {
      margin-right: 5px;
    }
  }
`;

export default function HomePage () {
  const session = useSession();
  const router = useRouter();
  const {user} = session;

  let $body;
  if (user.isSignedIn()) {
    $body = (
      <div className="CurrentUser">
        Signed in as {user.email}
        <div className="Buttons">
          <button
            onClick={async ()=> {
              await session.end();
            }}
            className="Signout"
          >
            Sign out
          </button>
          <GotoSettingsButton />
          <GotoUsersButton />
          <GotoDerpButton />
        </div>
      </div>
    );
  } else {
    $body = (
      <button
        onClick={()=> {
          router.go('/signin');
        }}
        className="Signin"
      >
        sign in
      </button>
    );
  }

  return (
    <HomePageStyled className="HomePage">
      {$body}
    </HomePageStyled>
  );
}
