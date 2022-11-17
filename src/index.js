import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes } from './Routes';
import { RouterProvider } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyles } from './styles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={Routes} />
    <GlobalStyles />
    <ToastContainer />
  </>,
);
