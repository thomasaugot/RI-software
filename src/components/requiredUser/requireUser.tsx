import { useCookies } from 'react-cookie';
import { useQuery } from '@tanstack/react-query';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useStateContext } from '../../utils/store';
import { getMeFn } from '../../queries';
import FullScreenLoader from '../shared/fullScreenLoader/FullScreenLoader';
import App from '../../App';

const RequireUser = ({ allowedRoles }: { allowedRoles: string[] }) => {
  const [cookies] = useCookies(['logged_in']);
  const location = useLocation();
  const stateContext = useStateContext();

  const {
    isLoading,
    isFetching,
    data: user,
  } = useQuery(['authUser'], getMeFn, {
    retry: 1,
    select: (data) => data.data.user,
    onSuccess: (data) => {
      stateContext.dispatch({ type: 'SET_USER', payload: data });
    },
  });

  const loading = isLoading || isFetching;

  if (loading) {
    return <FullScreenLoader />;
  }
  return (cookies.logged_in || user) && allowedRoles.includes(user?.login as string) ? (
    <App />
  ) : cookies.logged_in && user ? (
    <Navigate to='/unauthorized' state={{ from: location }} replace />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

export default RequireUser
