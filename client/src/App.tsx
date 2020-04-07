/* eslint-disable import/extensions */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppContainer } from './components/layout/Wrapper';

import HomePage from './pages/Home';
import Layout from './components/layout/Layout';

function App() {
  return (
    <>
      <Layout>
        <AppContainer>
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </AppContainer>
      </Layout>
    </>
  );
}

export default App;
