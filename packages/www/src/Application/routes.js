import {HomePage} from '../Home';
import {NotFoundPage} from '../NotFound';
import {SettingsPage} from '../Settings';
import {SigninPage} from '../Signin';
import {UsersPage} from '../Users';

const routes = {
  Home: {
    pattern: '/',
    page: HomePage
  },
  NotFound: {
    pattern: '/404',
    page: NotFoundPage
  },
  Settings: {
    pattern: '/settings/:count',
    page: SettingsPage,
    session: true
  },
  Signin: {
    pattern: '/signin',
    page: SigninPage,
    session: false
  },
  Users: {
    pattern: '/users',
    page: UsersPage,
    session: true
  }
};

export default routes;
