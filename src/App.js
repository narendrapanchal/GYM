import logo from './logo.svg';
import './App.css';
import AllRoutes from './components/AllRoutes';
import { Suspense } from 'react';
import { LoginContext, LoginContextProvider } from './context/LoginContext';

function App() {
  return (<Suspense fallback={<div>Loading....</div>}><LoginContextProvider>

    <AllRoutes></AllRoutes>
  </LoginContextProvider>
  </Suspense>
  );
}

export default App;
