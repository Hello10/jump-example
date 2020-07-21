import {
  GraphQLError,
  DoesNotExistError,
  NotAuthorizedError
} from '@hello10/jump-server';

export {
  GraphQLError,
  DoesNotExistError,
  NotAuthorizedError
};

export class AuthTokenError extends GraphQLError {
  constructor (params) {
    const {code, message} = params;
    super({
      code: 'AuthToken',
      message: `Auth token error ${code}: ${message}`,
      params
    });
  }
}
