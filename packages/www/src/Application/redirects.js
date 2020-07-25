function wantsSession (route) {
  const has = ('session' in route);
  return (has && route.session);
}

function wantsNoSession (route) {
  const has = ('session' in route);
  return (has && !route.session);
}

const redirects = {
  NotFound: (match)=> {
    return match ? false : 'NotFound';
  },
  Session: (match)=> {
    if (match) {
      const {route, input: {user}} = match;
      const signed_in = user && user.isSignedIn();

      if (wantsSession(route) && !signed_in) {
        return 'Signin';
      }

      if (wantsNoSession(route) && signed_in) {
        return 'Home';
      }
    }

    return false;
  }
};

export default redirects;
