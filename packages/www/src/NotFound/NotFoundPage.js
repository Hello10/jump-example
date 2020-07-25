import React from 'react';
import Styled from 'styled-components';

import {useRouter} from '../Application';

const NotFoundPageStyled = Styled.div`
  font-size: 30px;
  button {
    display: block;
  }
`;

export default function NotFoundPage () {
  const router = useRouter();
  return (
    <NotFoundPageStyled className="NotFoundPage">
      Page not found
      <button
        onClick={()=> router.go('Home')}
      >
        Go home
      </button>
    </NotFoundPageStyled>
  );
}
