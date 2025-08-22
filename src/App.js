import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './main_page.jsx';
import Login from './login_form/login.jsx';
import ProtectedRoute from './protectedrouter.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/access",
      element: <ProtectedRoute />, // Protect this route
      children: [
        {
          path: "",
          element: <MainPage />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
