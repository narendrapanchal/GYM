import { Navigate } from 'react-router-dom';

function PrivateRoute({ children, roles }) {
  const isAuthenticated = true; 
  const userRole = 'admin'; 

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;