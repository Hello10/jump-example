import {useSingleton} from '@hello10/react-hooks';
import {Router} from '@hello10/jump-client';

import redirects from './redirects';
import routes from './routes';

export default function useRouter () {
  return useSingleton(Router, {redirects, routes});
}
