import _ from 'lodash';
import {Authorizers} from '@hello10/jump-server';

export const {isSignedIn, isPublic} = Authorizers;

export function hasRole (roles) {
  if (!Array.isArray(roles)) {
    roles = [roles];
  }

  return ({context})=> {
    const role = context.user?.role;
    return roles.includes(role);
  };
}

export const isAdminUser = hasRole(['Admin']);

export function isAdminUserOr (auth) {
  return (request)=> {
    return isAdminUser(request) || auth(request);
  };
}

export function isSessionUser (path) {
  return isAdminUserOr((request)=> {
    const {user} = request.context;
    if (!user) {
      return false;
    }
    const id = _.get(request, path, null);
    return (user.id === id);
  });
}

export const isDataAuthor = isSessionUser('args.data.author_id');

export function isIdAuthor (type) {
  return async function isAuthor ({args, context}) {
    const {user} = context;
    if (!user) {
      return false;
    }
    const Type = context.getCollection(type);
    const {id} = args;
    const obj = await Type.get({id, assert: true});
    return (user.id === obj.author_id);
  };
}
