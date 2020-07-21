import Firebase from 'firebase/app';
import 'firebase/auth';
import {useSingleton} from '@hello10/react-hooks';
import {FirebaseSession} from '../jump';

import SessionUser from './SessionUser';
import client from './client';

export default function useSession () {
  const auth = Firebase.auth();
  const options = {Firebase, auth, SessionUser, client};
  return useSingleton(FirebaseSession, options);
}
