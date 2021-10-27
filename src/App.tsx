import React from 'react';
import AuthProvider from './auth/AuthProvider';
import { AppRouter } from './routers/AppRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <AppRouter/>
      </AuthProvider>
    </div>
  );
}

export default App;
