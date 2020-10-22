import Firebase from 'firebase/app';
import 'firebase/auth';
import {FirebaseSession, useSingleton} from '@hello10/jump-client';

import SessionUser from './SessionUser';
import client from './client';

export default function useSession () {
  const options = {Firebase, SessionUser, client};
  return useSingleton(FirebaseSession, options);
}
