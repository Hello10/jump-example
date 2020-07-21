import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import emailRegex from 'email-regex';

import {useSession} from '../Application';

const AuthenticationFormStyled = Styled.div`
  .AuthenticationButton {
    width: 200px;
    display: block;
    margin-bottom: 5px;
  }

  .EmailForm {
    margin-top: 5px;

    .EmailButton {
      width: 80px;
      margin-top: 5px;
    }
  }
`;

const Mode = {
  EmailHidden: 'EmailHidden',
  EmailSignin: 'EmailSignin',
  EmailSignup: 'EmailSignup'
};

function modeSuffix (mode) {
  return mode.replace('Email', '');
}

function AuthenticationButtons ({mode, providers, onClick}) {
  if (mode !== Mode.EmailHidden) {
    providers = providers.filter((provider)=> !provider.includes('Email'));
  }
  const $buttons = providers.map((provider)=> {
    const label = provider.includes('Email') ? 'Email' : provider;
    return (
      <button
        key={provider}
        onClick={(event)=> {
          event.preventDefault();
          onClick(provider);
        }}
        className="AuthenticationButton"
      >
        Signin with {label}
      </button>
    );
  });

  return (
    <div className="AuthenticationButtons">
      {$buttons}
    </div>
  );
}
AuthenticationButtons.propTypes = {
  providers: PropTypes.array,
  onClick: PropTypes.func,
  mode: PropTypes.string
};

const email_regex = emailRegex({exact: true});

export default function AuthenticationForm () {
  const [mode, setMode] = useState(Mode.EmailHidden);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const session = useSession();

  function emailIsValid () {
    return !!email_regex.test(email);
  }

  async function startSession (args) {
    try {
      await session.start(args);
    } catch (error) {
      setMessage(`Error signing up: ${error.message}`);
    }
  }

  function SwitchMode () {
    const new_mode = (mode === Mode.EmailSignin) ? Mode.EmailSignup : Mode.EmailSignin;
    const prompt = {
      [Mode.EmailSignin]: 'New user?',
      [Mode.EmailSignup]: 'Already signed up?'
    }[mode];

    return (
      <div className="SwitchMode">
        <div className="SwitchModePrompt">{prompt}</div>
        <button
          onClick={()=> setMode(new_mode)}
          className="SwitchModeButton"
        >
          {modeSuffix(new_mode)}
        </button>
      </div>
    );
  }

  let $email = '';
  if (mode !== Mode.EmailHidden) {
    $email = (
      <form className="EmailForm">
        <div className="FormField">
          <input
            type="email"
            label="Email"
            onChange={(event)=> setEmail(event.target.value)}
            value={email}
          />
        </div>
        <div className="FormField">
          <input
            type="password"
            label="Password"
            onChange={(event)=> setPassword(event.target.value)}
            value={password}
          />
        </div>
        <button
          className="EmailButton"
          disabled={!emailIsValid}
          onClick={async (event)=> {
            event.preventDefault();
            await startSession({
              provider: mode,
              email,
              password
            });
          }}
        >
          {modeSuffix(mode)}
        </button>
        <SwitchMode />
      </form>
    );
  }

  return (
    <div>
    <AuthenticationFormStyled>
      <AuthenticationButtons
        mode={mode}
        providers={['Google', Mode.EmailSignin]}
        onClick={async (provider)=> {
          if (provider === Mode.EmailSignin) {
            setMode(Mode.EmailSignin);
          } else {
            await startSession({provider});
          }
        }}
      />
      {$email}
      <div className="Message">
        {message}
      </div>
    </AuthenticationFormStyled>
    </div>
  );
}
