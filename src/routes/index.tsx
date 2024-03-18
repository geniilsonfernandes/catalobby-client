import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routeNames } from './routeNames';

import StoreLayout from '@/layout/StoreLayout';
import LogIn from '@/pages/LogIn';
import Product from '@/pages/Product';
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
          path: '*',
          element: <Navigate to="/login" replace />
        }
      ],
      errorElement: <Navigate to="/login" replace />,
      ErrorBoundary: () => <div>Error</div>
    },
    {
      path: '/store',
      element: <StoreLayout />,
      children: [
        {
          path: 'product',
          element: <Product />
        },
        {
          path: '*',
          element: <Navigate to="/store" replace />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}
