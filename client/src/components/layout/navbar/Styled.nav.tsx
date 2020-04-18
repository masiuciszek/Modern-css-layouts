/* eslint-disable import/extensions */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FadeDown, FadeInDown } from '../../../utils/animations';


export const StyledNav = styled.nav`
  animation: ${FadeDown} 1s ease;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 0 0 .5rem .5rem ;
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
  margin: 0 auto;
  padding: 1rem 1.2rem;
  position: sticky;
  transition: ${({ theme }) => theme.transition.mainTransition};
  width: 70vw;
  z-index:1;
  &:hover{
    ul{
      animation: ${FadeInDown} 300ms all;
      display:flex;
    }
  }

`;

export const StyledNavList = styled.ul`
  animation: ${FadeDown} 1s both;
  display: none;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem;
  transition: ${({ theme }) => theme.transition.mainTransition};
  width: 100%;
  li{
    padding: 0 .6rem;
  }
  @media(max-width:700px){
    flex-wrap: wrap;
    li{
      padding: .5rem;
    }
  }
  &:not(:hover){
    opacity:0;
    transition:opacity 2000ms;
  }
`;


export const StyledNavTitle = styled.section`
  margin: 0 auto;
  padding: .5rem;
  h3{
    color: ${(props) => props.theme.colors.white};
    font-size: 2rem;
    letter-spacing: 3px;
    text-align: center;
  }
`;


export const StyledLink = styled(Link)`
   color: ${(props) => props.theme.colors.white};
   font-size: 1.8em;
   padding: .5rem;
   text-transform: capitalize;
   transition: ${({ theme }) => theme.transition.quickTransition};
   &:hover{
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};

   }
`;
