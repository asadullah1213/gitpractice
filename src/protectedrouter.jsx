import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // Check if the user is authenticated
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));
  
  // If authenticated, render the nested route's component
  if (isAuth) {
    return <Outlet />;
  }
  
  // If not authenticated, redirect to the login page
  // The 'replace' prop ensures the user can't go back to the protected page with the back button
  return <Navigate to="/" replace />;
};

export default ProtectedRoute;