/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable no-shadow */
import * as React from 'react';
import * as H from 'history';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import Title from '../components/layout/title/Title';
import FoodList from '../components/food_list/FoodList';

import { loadUser } from '../redux/auth/auth.actions';
import { selectIsLoggedIn } from '../redux/auth/auth.selector';
import { AppState } from '../redux';

interface Props extends RouteComponentProps {
  loadUser: () => Promise<void>;
  isLoggedIn: boolean;
  history: H.History<any>;
}

const HomePage: React.FC<Props> = ({ loadUser, isLoggedIn, history }) => {
  const handleLoadUser = React.useCallback(() => loadUser(), [loadUser]);
  React.useEffect(() => {
    if (!isLoggedIn) {
      history.push('/auth');
    }
    handleLoadUser();
  }, [handleLoadUser, history, isLoggedIn]);

  return (
    <>
      <Title title="Welcome" title2="Master" bgColor="#fff" textColor="#333" />
      <FoodList />
    </>
  );
};


const mapStateToProps = (state: AppState) => ({
  isLoggedIn: selectIsLoggedIn(state),

});

export default connect(mapStateToProps, { loadUser })(HomePage);
