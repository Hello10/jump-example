import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import classie from '@hello10/classie';

import useRouter from './useRouter';

const Styles = {
  Container: Styled.div`
    padding: 10px;

    .Title {
      cursor: pointer;
      text-decoration: underline;
      &.Current {
        text-decoration: none;
      }
    }
  `
};

export default function Container ({match, children}) {
  const router = useRouter();

  const classes = classie({
    Title: true,
    Current: (match.route.name === 'Home')
  }).toString();

  return (
    <Styles.Container>
      <header>
        <h1
          className={classes}
          onClick={()=> router.go('/')}
        >
          Jump
        </h1>
      </header>
      {children}
    </Styles.Container>
  );
}

Container.propTypes = {
  match: PropTypes.object,
  children: PropTypes.any
};
