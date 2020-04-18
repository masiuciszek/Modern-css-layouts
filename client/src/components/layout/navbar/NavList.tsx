import * as React from 'react';
import { StyledNavList, StyledLink } from './Styled.nav';
import { navData } from '../../../utils/navData';

interface Props {

}

const NavList: React.FC<Props> = () => (
  <StyledNavList>
    {navData.map((item) => (
      <li key={item.text}>
        <StyledLink to={item.path}>
          {item.text}
        </StyledLink>
      </li>
    ))}
  </StyledNavList>
);
export default NavList;
