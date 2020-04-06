import * as React from 'react';
import Title from '../components/layout/title/Title';

interface Props {

}

const HomePage: React.FC<Props> = () => (
  <div>
    <Title title="Welcome" title2="Master" bgColor="#fff" textColor="#333" />
  </div>
);
export default HomePage;
