/* eslint-disable import/extensions */
import styled from 'styled-components';
import { FlexStyles } from '../styled/GlobalStyles';


export const Form = styled.form`
  ${FlexStyles};

  width: 100%;
`;
export const FormGroup = styled.div`
  ${FlexStyles};
  width: 100%;
`;
export const FormLabel = styled.label`
  ${FlexStyles}
  width: 80%;
  span{
    font-size: 1.2rem;
    margin-right:auto;
    padding: .5rem 0;
    text-transform:capitalize;
  }
`;

export const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  margin:1rem 0;
  outline: 0;
  padding: .4rem .8rem;
  transition:${({ theme }) => theme.transition.mainTransition};
  width: 100%;
  &:focus{
    box-shadow: ${(props) => props.theme.shadow.darkShadow};
    width: 90%;
  }
`;
