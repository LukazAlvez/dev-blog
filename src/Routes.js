import { createBrowserRouter } from 'react-router-dom';

import Private from './Private';

import { Home } from './pages/Home';
import { Error } from './pages/Error';
import { Post } from './pages/Post';
import { Admin } from './pages/Admin';
import { Login } from './pages/Login';

export const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <Error />,
  },
  {
    path: '/post/:id',
    element: <Post />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/admin',
    element: (
      <Private>
        <Admin />
      </Private>
    ),
  },
]);
