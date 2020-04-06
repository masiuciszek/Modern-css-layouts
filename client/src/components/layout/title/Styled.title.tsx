import styled from 'styled-components';
import { FlexStyles } from '../../styled/GlobalStyles';

interface ITitle{
  bgColor?: string;
  textColor?: string;
}


export const StyledTitle = styled.div<ITitle>`
  background:${({ theme, bgColor }) => (bgColor || theme.colors.primary)};
  color:${({ theme, textColor }) => (textColor || theme.colors.white)};
  margin: 3rem auto 2rem auto;
  padding: .5rem;
  ${FlexStyles};
  width: 60vw;

`;


export const StyledHeading = styled.h1`
  text-align: center:

`;
