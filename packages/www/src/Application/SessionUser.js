import gql from 'graphql-tag';

import base_logger from './logger';

export default class SessionUser {
  constructor (data = null) {
    this.data = data;
    this.logger = base_logger.child('SessionUser');
  }

  get client () {
    const {client} = this.constructor;
    if (!client) {
      throw new Error('No client set on SessionUser');
    }
    return client;
  }

  static async load () {
    const query = gql`{
      loadUser {
        id
        email
        status
        role
      }
    }`;
    const {data} = await this.client.query({query});
    return new this(data?.loadUser);
  }

  get id () {
    return this.data?.id;
  }

  get email () {
    return this.data?.email;
  }

  get status () {
    return this.data?.status;
  }

  get role () {
    return this.data?.role;
  }

  isSignedIn () {
    return !!this.id;
  }
}
