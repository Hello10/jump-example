import Controller from './Controller';
import {
  isSignedIn,
  isDataAuthor,
  isIdAuthor
} from './Authorizers';

export default class CommentController extends Controller {
  get name () {
    return 'Comment';
  }

  resolvers () {
    return {
      Query: {},
      Mutation: {
        createComment: {
          resolver: this.create,
          authorizer: isDataAuthor
        },
        updateComment: {
          resolver: this.update,
          authorizer: isIdAuthor('Comment')
        }
      },
      Comment: {
        author: {
          resolver: this.Comment_author,
          authorizer: isSignedIn
        },
        post: {
          resolver: this.Comment_post,
          authorizer: isSignedIn
        }
      }
    };
  }

  Comment_author ({obj, context}) {
    const User = context.getCollection('User');
    return User.get({
      id: obj.author_id
    });
  }

  Comment_post ({obj, context}) {
    const Post = context.getCollection('Post');
    return Post.get({
      id: obj.id
    });
  }
}
