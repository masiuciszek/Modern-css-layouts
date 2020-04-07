import * as React from 'react';
import Title from '../components/layout/title/Title';
import FoodList from '../components/food_list/FoodList';

interface Props {

}

const HomePage: React.FC<Props> = () => (
  <>
    <Title title="Welcome" title2="Master" bgColor="#fff" textColor="#333" />
    <FoodList />
  </>
);
export default HomePage;
