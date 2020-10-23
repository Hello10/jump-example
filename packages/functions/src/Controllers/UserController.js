import Controller from './Controller';
import {
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
          authorizer: isSignedIn
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
      User: {
        posts: {
          resolver: this._byAuthor('Post'),
          authorizer: isSignedIn
        },
        comments: {
          resolver: this._byAuthor('Comment'),
          authorizer: isSignedIn
        }
      }
    };
  }

  loadUser ({context}) {
    const {user_id} = context;
    const User = this.collection;
    return User.loadForAuthUserId(user_id);
  }

  _byAuthor (type) {
    return function byAuthor ({obj, context}) {
      const Type = context.getCollection(type);
      return Type.byAuthor({
        author_id: obj.id
      });
    };
  }
}
