import styled from 'styled-components';
import { FlexStyles } from '../../styled/GlobalStyles';

interface ITitle{
  bgColor?: string;
  textColor?: string;
}


export const StyledTitle = styled.div<ITitle>`
  background:${({ theme, bgColor }) => (bgColor || theme.colors.primary)};
  box-shadow: ${(props) => props.theme.shadow.lightShadow};
  color:${({ theme, textColor }) => (textColor || theme.colors.white)};
  ${FlexStyles};
  margin: 3rem auto 2rem auto;
  padding: .5rem;
  width: 60vw;
  h1{
      font-size: 4rem;
    }
  @media(max-width: 800px){
    h1{
      font-size: 3rem;
    }
  }
`;


export const StyledHeading = styled.h1`
  text-align: center;
`;
