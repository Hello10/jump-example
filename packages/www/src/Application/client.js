import {getClient} from '../jump';

import config from './config';

const client = getClient({
  uri: `${config.backend_uri}/graphql`
});

export default client;
