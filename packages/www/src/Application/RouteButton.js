import React from 'react';
import PropTypes from 'prop-types';

import useRouter from './useRouter';

export default function RouteButton ({route, ...props}) {
  const router = useRouter();

  if (route?.constructor === Function) {
    route = route();
  }
  return (
    <button
      onClick={()=> {
        router.go(route);
      }}
      {...props}
    />
  );
}

RouteButton.propTypes = {
  route: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string
  ])
};
