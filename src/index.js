import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes } from './Routes';
import { RouterProvider } from 'react-router-dom';

import { GlobalStyles } from './styles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={Routes} />
    <GlobalStyles />
  </>,
);
