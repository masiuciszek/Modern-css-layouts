/* eslint-disable react/prop-types */
import * as React from 'react';
import { StyledNavTitle } from './Styled.nav';

interface Props {
  title: string;
}

const NavTitle: React.FC<Props> = ({ title }) => (
  <StyledNavTitle>
    {' '}
    <h3>
      {' '}
      {title}
      {' '}
    </h3>
    {' '}
  </StyledNavTitle>
);
export default NavTitle;
