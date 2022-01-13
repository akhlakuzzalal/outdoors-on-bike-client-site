import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
   const { user } = useAuth();
   let location = useLocation();
   if (!user?.email) {
      return <Navigate to="/login" state={{ from: location }} replace />;
   }

   return children;
};

export default PrivateRoute;