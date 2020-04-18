/* eslint-disable import/extensions */
import * as React from 'react';
import NavList from './NavList';
import { StyledNav } from './Styled.nav';
import NavTitle from './NavTitle';

interface Props {
}


const NavBar: React.FC<Props> = () => (
  <StyledNav>
    <NavTitle title="Food List" />
    <NavList />
  </StyledNav>
);
export default NavBar;
