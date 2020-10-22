import Controller from './Controller';
import {
  isSignedIn,
  isDataAuthor,
  isIdAuthor
} from './Authorizers';

export default class PostController extends Controller {
  get name () {
    return 'Post';
  }

  resolvers () {
    return {
      Query: {
        getPost: {
          resolver: this.get,
          authorizer: isSignedIn
        },
        listPosts: {
          resolver: this.list,
          authorizer: isSignedIn
        }
      },
      Mutation: {
        createPost: {
          resolver: this.create,
          authorizer: isDataAuthor
        },
        updatePost: {
          resolver: this.update,
          authorizer: isIdAuthor('Post')
        }
      },
      Post: {
        author: {
          resolver: this.Post_author,
          authorizer: isSignedIn
        },
        comments: {
          resolver: this.Post_comments,
          authorizer: isSignedIn
        }
      }
    };
  }

  Post_author ({obj, context}) {
    const User = context.getCollection('User');
    return User.get({
      id: obj.author_id
    });
  }

  Post_comments ({obj, context}) {
    const Comment = context.getCollection('Comment');
    return Comment.onPost({
      post_id: obj.id
    });
  }
}
