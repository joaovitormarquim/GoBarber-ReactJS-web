import React from 'react';

import GlobalStyle from './styles/global';

import SignIn from './Pages/SignIn';
// import SignUp from './Pages/SignUp';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />

    <GlobalStyle />
  </>
);

export default App;
