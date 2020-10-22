import {
  GraphQLValidatedDate,
  GraphQLValidatedEmail,
  GraphQLValidatedString,
  GraphQLValidatedURL,
  GraphQLValidatedUsername
} from 'graphql-validated-types';

export {default as JSON} from 'graphql-type-json';

export const Email = new GraphQLValidatedEmail({
  name: 'Email'
}).exact();

export const FirestoreId = new GraphQLValidatedString({
  name: 'FirestoreId'
}).alphanumeric().length({min: 1});

export const URL = new GraphQLValidatedURL().exact().strict();

export const Username = new GraphQLValidatedUsername().length({min: 2, max: 32});

export const Date = new GraphQLValidatedDate();
