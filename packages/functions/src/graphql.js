import * as Functions from 'firebase-functions';
import {
  createGraphqlHandler,
  contextBuilder
} from '@hello10/jump-server';

import setup from './setup';
import * as Controllers from './Controllers';
import * as Scalars from './Scalars';
import Schema from './Schema.graphql';

const options = setup();

const buildContext = contextBuilder({
  loadSession: ({token, getCollection})=> {
    const User = getCollection('User');
    return User.loadFromToken(token);
  },
  ...options
});

const handler = createGraphqlHandler({
  options: {
    server: {
      context: buildContext
    },
    handler: {
      cors: {
        origin: '*',
        credentials: true
      }
    },
    controller: options
  },
  Controllers,
  Scalars,
  Schema
});

export default Functions.https.onRequest(handler);
