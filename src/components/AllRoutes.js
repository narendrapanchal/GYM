import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Header from './Header';
import AddGymClient from '../pages/AddGymClient';
import EditGymClient from '../pages/EditGymClient';

// Lazy loading components
const Home = lazy(() => import('../pages/Home'));

// List of route objects
const routeConfig = [
  {
    path: '/',
    isPrivate: true,
    roles: ['user', 'admin'], // Example roles
    element: <Home />,
  },
  {
    path: '/login',
    isPrivate: false,
    roles: [],
    element: <Login />,
  },
  {
    path: '/signup',
    isPrivate: false,
    roles: [],
    element: <SignUp />,
  },
  {
    path:"/addgymclient",
    isPrivate:true,
    roles:["admin"],
    element:<AddGymClient/>
  },
  {
    path:"/edit/:mobilenumber",
    isPrivate:true,
    roles:["admin"],
    element:<EditGymClient/>
  }
];

function AllRoutes() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        {routeConfig.map(({ path, isPrivate, roles, element }) => (
          <Route
            key={path}
            path={path}
            element={
              isPrivate ? (
                <PrivateRoute roles={roles}>{element}</PrivateRoute>
              ) : (
                element
              )
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;
