import {getClient} from '@hello10/jump-client';

import config from './config';

const client = getClient({
  uri: `${config.backend_uri}/graphql`
});

export default client;
