/* eslint-disable import/extensions */
import * as React from 'react';
import NavList from './NavList';
import { StyledNav } from './Styled.nav';
import useToggle from '../../../hooks/useToggle';
import NavTitle from './NavTitle';

interface Props {
}


const NavBar: React.FC<Props> = () => {
  const [showList, toggleList] = useToggle();

  return (
    <StyledNav>
      <NavTitle title="Food List" />
      <NavList />
    </StyledNav>
  );
};
export default NavBar;
