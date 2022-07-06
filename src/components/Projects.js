import React from 'react'
import styled from 'styled-components';
import {secondColor, thirdColor, LinksA, thirdLightColor, secondLightColor} from './Common';


const ProjectsContainer = styled.header`
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
  position: absolute;
  bottom: -4rem;
  left: 50%;
  transform: translate(-50%, 50%);
`



const WorkBtn = styled.button`
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


function Projects({lightMode, setlightMode}) {
  return (
    <ProjectsContainer isLight={lightMode}>
        <WorkBtn isLight={lightMode}/>
        <WorkA href='' isLight={lightMode}>Work</WorkA>
    </ProjectsContainer>
  )
}

export default Projects