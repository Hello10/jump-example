import Collection from './Collection';

export default class PostCollection extends Collection {
  get name () {
    return 'Post';
  }

  byAuthor ({author_id}) {
    return this.find({
      query: ['author_id', '==', author_id]
    });
  }
}
