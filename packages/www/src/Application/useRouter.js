import {useSingleton} from '@hello10/react-hooks';
import {Router} from '../jump';

import redirects from './redirects';
import routes from './routes';

export default function useRouter () {
  return useSingleton(Router, {redirects, routes});
}
