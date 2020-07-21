import Collection from './Collection';
import {AuthTokenError} from '../Errors';

export default class UserCollection extends Collection {
  get name () {
    return 'User';
  }

  async loadForAuthUserId (id)  {
    return this.getOrAddById({
      id,
      add: async ()=> {
        const firebase_user = await this.auth.getUser(id);
        if (!firebase_user) {
          throw new Error('Firebase user does not exist');
        }
        return {
          email: firebase_user.email,
          role: 'Member',
          status: 'Active'
        };
      }
    });
  }

  async loadFromToken (token) {
    try {
      const decoded = await this.auth.verifyIdToken(token);
      const {user_id} = decoded;
      const user = await this.get({id: user_id});
      return {user_id, user};
    } catch (error) {
      const {code, message} = error;
      throw new AuthTokenError({code, message});
    }
  }
}
