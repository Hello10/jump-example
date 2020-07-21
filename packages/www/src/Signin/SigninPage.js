import React from 'react';
import Styled from 'styled-components';

import AuthenticationForm from './AuthenticationForm';

const SigninPageStyled = Styled.div``;

export default function SigninPage () {
  return (
    <SigninPageStyled className="SigninPage">
      <AuthenticationForm />
    </SigninPageStyled>
  );
}
