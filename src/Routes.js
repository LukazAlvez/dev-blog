import { createBrowserRouter } from 'react-router-dom';

import { Home } from './pages/Home';
import { Error } from './pages/Error';
import { Post } from './pages/Post';
import { Admin } from './pages/Admin';

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
    path: '/admin',
    element: <Admin />,
  },
]);
