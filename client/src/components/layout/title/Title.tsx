import * as React from 'react';
import { StyledTitle, StyledHeading } from './Styled.title';

interface Props {
  title: string;
  title2?: string;
  bgColor?: string;
  textColor?: string;
}

const Title: React.FC<Props> = (props) => (
  <StyledTitle bgColor={props.bgColor} textColor={props.textColor}>
    <StyledHeading>{props.title}</StyledHeading>
    <StyledHeading as="h3">{props.title2}</StyledHeading>
  </StyledTitle>
);
export default Title;
