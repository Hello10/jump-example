import Controller from './Controller';
import {
  //isAdminUser,
  isSignedIn,
  isSessionUser
} from './Authorizers';

export default class UserController extends Controller {
  get name () {
    return 'User';
  }

  resolvers () {
    return {
      Query: {
        getUser: {
          resolver: this.get,
          authorizer: isSessionUser('args.id')
        },
        loadUser: {
          resolver: this.loadUser,
          authorizer: isSignedIn
        },
        listUsers: {
          resolver: this.list,
          authorizer: isSignedIn
        }
      },
      Mutation: {
        updateUser: {
          resolver: this.update,
          authorizer: isSessionUser('args.id')
        }
      },
      User: {}
    };
  }

  loadUser ({context}) {
    const {user_id} = context;
    const User = this.collection();
    return User.loadForAuthUserId(user_id);
  }
}
