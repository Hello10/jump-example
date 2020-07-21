import {
  GraphQLValidatedEmail,
  GraphQLValidatedString,
  GraphQLValidatedURL,
  GraphQLValidatedUsername
} from 'graphql-validated-types';
import JSON from 'graphql-type-json';

const Email = new GraphQLValidatedEmail({
  name: 'Email'
}).exact();

const FirestoreId = new GraphQLValidatedString({
  name: 'FirestoreId'
}).alphanumeric().length({min: 1});

const URL = new GraphQLValidatedURL().exact().strict();

const Username = new GraphQLValidatedUsername().length({min: 2, max: 32});

export {
  Email,
  FirestoreId,
  JSON,
  URL,
  Username
};
