import styled from 'styled-components';

interface IBtn{
  width?: string;
  bgColor?: string;
  color?: string;
}

export const Btn = styled.button<IBtn>`
  background: ${({ theme, bgColor }) => (bgColor || theme.colors.primary)};
  border: 0;
  box-shadow: ${(props) => props.theme.shadow.lightShadow};
  color: ${({ theme, color }) => (color || theme.colors.white)};
  cursor: pointer;
  display: block;
  font-size: 1.3rem;
  margin: 1rem auto;
  outline: 0;
  padding: .3rem .7rem;
  transition:${({ theme }) => theme.transition.mainTransition};
  width: ${({ width }) => (width || '12rem')};
  &:hover{
    background: ${({ theme, bgColor }) => (bgColor || theme.colors.white)};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    box-shadow: ${(props) => props.theme.shadow.darkShadow};
    color: ${({ theme, color }) => (color || theme.colors.primary)};
  }
`;
