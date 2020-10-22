import Collection from './Collection';

export default class CommentCollection extends Collection {
  get name () {
    return 'Comment';
  }

  byAuthor ({author_id}) {
    return this.find({
      query: {author_id}
    });
  }

  onPost ({post_id}) {
    return this.find({
      query: {post_id}
    });
  }
}
