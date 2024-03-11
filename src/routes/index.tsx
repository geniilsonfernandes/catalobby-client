import SingUp from '@/pages/SingUp';

import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';

const PublicLayout = () => {
  return <Outlet />;
};

function PublicRoute(): {
  element: JSX.Element;
  children: RouteObject[];
} {
  return {
    element: <PublicLayout />,
    children: [
      { path: '/sign-up', element: <SingUp /> },
      { path: '*', element: <Navigate to="/sign-up" replace /> }
    ]
  };
}

export function AppRouter() {
  const router = createBrowserRouter([PublicRoute()]);

  return <RouterProvider router={router} />;
}
