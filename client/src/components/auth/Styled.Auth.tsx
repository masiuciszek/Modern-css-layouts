import styled from 'styled-components';
import { FlexStyles } from '../styled/GlobalStyles';


export const AuthWrapper = styled.div`
  ${FlexStyles};
  height: 100%;
  padding: .5rem;
  @media(max-width:1000px){
    width: 100%;
  }
`;
