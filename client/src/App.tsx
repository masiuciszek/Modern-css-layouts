/* eslint-disable import/extensions */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import HomePage from './pages/Home';
import Layout from './components/layout/Layout';

function App() {
  const test = async () => {
    const res = await axios.get('/api/dishes');
    const { data } = res;
    console.log(data);
  };


  test();
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
