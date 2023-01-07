import { useCookies } from 'react-cookie';
import { useQuery } from '@tanstack/react-query';

import React from 'react';
import { useStateContext } from './store';
import { getMeFn } from '../queries';
import FullScreenLoader from '../components/shared/fullScreenLoader/FullScreenLoader';

type AuthMiddlewareProps = {
  children: React.ReactElement;
};

const AuthMiddleware: React.FC<AuthMiddlewareProps> = ({ children }) => {
  const [cookies] = useCookies(['logged_in']);
  const stateContext = useStateContext();

  const query = useQuery(['authUser'], () => getMeFn(), {
    enabled: !!cookies.logged_in,
    select: (data) => data.data.user,
    onSuccess: (data) => {
      stateContext.dispatch({ type: 'SET_USER', payload: data });
    },
  });

  if (query.isLoading && cookies.logged_in) {
    return <FullScreenLoader />;
  }

  return children;
};

export default AuthMiddleware;
