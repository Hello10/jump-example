import Controller from './Controller';
import {isPublic, isSignedIn} from './Authorizers';

export default class UtilityController extends Controller {
  get name () {
    return 'Utility';
  }

  resolvers () {
    return {
      Query: {
        version: {
          resolver: this.version,
          authorizer: isPublic
        },
        dupe: {
          resolver: this.dupe,
          authorizer: isSignedIn
        }
      }
    };
  }

  version () {
    return '1.0.0';
  }

  dupe ({args}) {
    const {str, count} = args;
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(str);
    }
    return result.join('');
  }
}
