/* eslint-disable import/extensions */
/* eslint-disable no-shadow */
import * as React from 'react';
import { connect } from 'react-redux';
import Title from '../components/layout/title/Title';
import FoodList from '../components/food_list/FoodList';

import { loadUser } from '../redux/auth/auth.actions';

interface Props {
  loadUser: () => Promise<void>;
}

const HomePage: React.FC<Props> = ({ loadUser }) => {
  const handleLoadUser = React.useCallback(() => loadUser(), [loadUser]);
  React.useEffect(() => {
    handleLoadUser();
  }, [handleLoadUser]);

  return (
    <>
      <Title title="Welcome" title2="Master" bgColor="#fff" textColor="#333" />
      <FoodList />
    </>
  );
};

export default connect(null, { loadUser })(HomePage);
