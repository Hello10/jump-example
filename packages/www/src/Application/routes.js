import {DerpPage} from '../Derp';
import {HomePage} from '../Home';
import {NotFoundPage} from '../NotFound';
import {SigninPage} from '../Signin';
import {
  SettingsPage,
  UserPage,
  UsersPage
} from '../Users';

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
    pattern: '/settings',
    page: SettingsPage,
    session: true
  },
  Derp: {
    pattern: '/derp/:derp/:count',
    page: DerpPage
  },
  Signin: {
    pattern: '/signin',
    page: SigninPage,
    session: false
  },
  User: {
    pattern: '/users/:id',
    page: UserPage,
    session: true
  },
  Users: {
    pattern: '/users',
    page: UsersPage,
    session: true
  }
};

export default routes;
