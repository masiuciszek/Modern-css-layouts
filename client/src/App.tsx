/* eslint-disable dot-notation */
/* eslint-disable import/extensions */
import React from 'react';
import { AppContainer } from './components/layout/Wrapper';
import Layout from './components/layout/Layout';
import Router from './components/route/Router';
import setAuthToken from './utils/setAuthToke';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <>
      <Layout>
        <AppContainer>
          <Router />
        </AppContainer>
      </Layout>
    </>
  );
}

export default App;
