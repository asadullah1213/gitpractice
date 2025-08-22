import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main_page from './main_page.jsx';
import Login from './login_form/login.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main_page />
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
