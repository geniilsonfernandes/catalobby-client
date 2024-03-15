import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routeNames } from './routeNames';

import LogIn from '@/pages/LogIn';
import SingUp from '@/pages/SingUp';

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
          path: routeNames.signup,
          element: <SingUp />
        },
        {
          path: routeNames.login,
          element: <LogIn />
        }
      ],
      errorElement: <Navigate to="/LogIn" replace />,
      ErrorBoundary: () => <div>Error</div>
    }
  ]);

  return <RouterProvider router={router} />;
}
