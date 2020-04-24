/* eslint-disable import/extensions */
import * as React from 'react';
import styled from 'styled-components';
import { Rotator, RotatorAnti } from '../../utils/animations';


const StyledSpinner = styled.div`
  left: 50%;
  margin: 70px auto 0px auto;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translateX(-50%);
  /* width: 960px; */

  .spin{
      -webkit-box-pack: start;
    display: -webkit-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 50px;
    position: relative;
    width: 125px;
    height: 125px;
    &::after,&::before{
      content: "";
    display: block;
    position: absolute;
    border-width: 4px;
    border-style: solid;
    border-radius: 50%;
    }

    &::before{
      width: 117px;
  height: 117px;
  border-bottom-color: #212121;
  border-right-color: #212121;
  border-top-color: rgba(33, 33, 33, 0);
  border-left-color: rgba(33, 33, 33, 0);
  top: 0px;
  left: 0px;
  -webkit-animation: ${Rotator} 1s linear 0s infinite;
          animation: ${Rotator} 1s linear 0s infinite;
    }

    &::after{
      width: 81.9px;
  height: 81.9px;
  border-bottom-color: #212121;
  border-right-color: #212121;
  border-top-color: rgba(33, 33, 33, 0);
  border-left-color: rgba(33, 33, 33, 0);
  top: 17.55px;
  left: 17.55px;
  -webkit-animation: ${RotatorAnti} 0.85s linear 0s infinite;
          animation: ${RotatorAnti} 0.85s linear 0s infinite;
    }
  }

  .spinner-block{
    margin-right: 83px;
    text-align: center;
    width: 125px;
    }


`;


interface Props {

}


const Spinner: React.FC<Props> = () => (
  <StyledSpinner>
    <div className="spin">
      <div className="spinner-block" />
    </div>
  </StyledSpinner>
);


export default Spinner;
