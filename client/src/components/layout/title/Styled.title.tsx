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
  margin: 3rem auto 2rem auto;
  ${FlexStyles};
  padding: .5rem;
  position: relative;
  width: 60vw;
  h1{
      font-size: 3rem;
    }
  @media(max-width: 800px){
    h1{
      font-size: 2.5rem;
    }
  }
`;


export const StyledHeading = styled.h1`
  text-align: center;
`;
