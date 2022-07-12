import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {secondColor, thirdColor, LinksA, thirdLightColor, secondLightColor} from './Common';


const WorkContainer = styled.header`
  position: fixed;
  height: auto;
  width: auto;
  top: 3rem;
  right: 3rem;
  &:hover > button{
    background-color: ${props => props.isLight === true ? thirdLightColor : thirdColor};
  }
  &:hover > a {
    color: ${props => props.isLight === true ? thirdLightColor : thirdColor};
  }
`

const WorkA = styled(LinksA)`
  height: auto;
  width: auto;
  position: absolute;
  bottom: -4rem;
  left: 50%;
  transform: translate(-50%, 50%);

  &:after {    
    bottom: 0;
    content: "";
    display: block;
    width: 1.5px;
    left: -35%;
    position: absolute;
    background: ${props => props.isLight === true ? thirdLightColor : thirdColor};
    transition: height 0.3s ease 0s, left 0.3s ease 0s;
    height: 0;
    @media (min-width: 1200px) {
      width: 2px;
    }
  }
  &:hover:after { 
    height: 100%; 
    top: 0; 
  }
`



const Button = styled.button`
  position: relative;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.isLight === true ? secondLightColor : secondColor};
  transition: all .7s ease-out;
  @media (max-width: 850px) {
      display: none;
  }
`


function WorkBtn ({lightMode}) {
  return (
    <WorkContainer isLight={lightMode}>
        <Link to="Work">
          <Button isLight={lightMode}/>
          <WorkA href='' isLight={lightMode}>Work</WorkA>
        </Link>
    </WorkContainer>
  )
}

export default WorkBtn