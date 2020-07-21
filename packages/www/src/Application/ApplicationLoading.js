import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import useSession from './useSession';

const SessionLoadingStyled = Styled.div`
  .Message {
    font-size: 16px;
  }
`;

function Error ({error}) {
  const session = useSession();

  return (
    <div className="Error">
      <div className="Message">
        Error: {error.message}
      </div>
      <button
        onClick={async ()=> {
          await session.end();
        }}
      >
        Reload
      </button>
    </div>
  );
}

Error.propTypes = {
  error: PropTypes.object
};

function Loading () {
  return (
    <div className="Loading">
      <div className="Message">
        Loading...
      </div>
    </div>
  );
}

export default function SessionLoading ({user, error, ...props}) {
  let $body;
  if (error) {
    $body = (
      <Error error={error} />
    );
  } else {
    $body = (
      <Loading />
    );
  }

  return (
    <SessionLoadingStyled {...props}>
      {$body}
    </SessionLoadingStyled>
  );
}

SessionLoading.propTypes = {
  user: PropTypes.object,
  error: PropTypes.object
};
