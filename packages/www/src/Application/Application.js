import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import {ApplicationContainer} from '../jump';

import ApplicationLoading from './ApplicationLoading';
import client from './client';
import config from './config';
import Container from './Container';
import logger from './logger';
import useSession from './useSession';
import useRouter from './useRouter';

Firebase.initializeApp(config.firebase);

export default function Application () {
  logger.info('Rendering Application');
  return (
    <ApolloProvider client={client}>
      <ApplicationContainer
        Container={Container}
        ApplicationLoading={ApplicationLoading}
        PageLoading={()=> 'Page loading...'}
        PageError={({error})=> `Error! ${error.message}`}
        client={client}
        useRouter={useRouter}
        useSession={useSession}
      />
    </ApolloProvider>
  );
}
