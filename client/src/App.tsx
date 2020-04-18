/* eslint-disable import/extensions */
import React from 'react';
import { AppContainer } from './components/layout/Wrapper';
import Layout from './components/layout/Layout';
import Router from './components/route/Router';

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
