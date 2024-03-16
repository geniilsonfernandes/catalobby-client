import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routeNames } from './routeNames';

import LogIn from '@/pages/LogIn';
import SingUp from '@/pages/SingUp';
import Store from '@/pages/Store';

const PublicLayout = () => {
  return <Outlet />;
};

export function AppRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PublicLayout />,
      children: [
        {
          path: '/',
          element: <SingUp />
        },
        {
          path: routeNames.signup,
          element: <SingUp />
        },
        {
          path: routeNames.login,
          element: <LogIn />
        },
        {
          path: routeNames.store,
          element: <Store />
        },
        {
          path: '*',
          element: <Navigate to="/login" replace />
        }
      ],
      errorElement: <Navigate to="/login" replace />,
      ErrorBoundary: () => <div>Error</div>
    }
  ]);

  return <RouterProvider router={router} />;
}
