/* eslint-disable import/extensions */
import * as React from 'react';
import styled from 'styled-components';
import { Colors, Dash, Rotator } from '../../utils/animations';


interface Props {

}


const Spinner: React.FC<Props> = () => (
  <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
    <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30" />
  </svg>
);


export default styled(Spinner)`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translateX(-50%);
  .spinner{
    -webkit-animation: ${Rotator} 1.4s linear infinite;
          animation: ${Rotator} 1.4s linear infinite;
  }
  .path{
    -webkit-animation: ${Dash} 1.4s ease-in-out infinite, ${Colors} 5.6s ease-in-out infinite;
  -webkit-transform-origin: center;
  animation: ${Dash} 1.4s ease-in-out infinite, ${Colors} 5.6s ease-in-out infinite;
          stroke-dasharray: 187;
  stroke-dashoffset: 0;
          transform-origin: center;
  }

`;
