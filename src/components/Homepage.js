import React from 'react';
import styled from 'styled-components';
import Marquee from './pagecontent/Marquee';
import Marquee2 from './pagecontent/Marquee2';
import Marquee3 from './pagecontent/Marquee3';
import Marquee4 from './pagecontent/Marquee4';
import Education from './pagecontent/Education';
import Landing from './pagecontent/Landing';
import Work from './pagecontent/Work';
import About from './pagecontent/About';
import DarkBtn from './pagecontent/Darkbtn';
import {primaryLightColor, primaryColor} from './Common';


const HomePageContainer = styled.main`
  height: auto;
  width: calc(100% - 100px);
  background-color: ${props => props.isLight === true ? primaryLightColor : primaryColor};
  transition: all .3s ease-in;

  @media (min-width: 1400px) {
    width: calc(100% - 150px);
  }

  @media (max-width: 850px) {
    width: 100%;
    margin-top: 100px;
  }
  @media (max-width: 450px) {
    margin-top: 80px;
  }
`

const landing = ({lightMode, setlightMode}) => {

  return (
    <HomePageContainer isLight={lightMode}>
      <DarkBtn setlightMode={setlightMode} lightMode={lightMode}/>
      <Landing setlightMode={setlightMode} lightMode={lightMode}/>
      <Marquee setlightMode={setlightMode} lightMode={lightMode}/>
      <Education setlightMode={setlightMode} lightMode={lightMode}/>
      <Marquee2 setlightMode={setlightMode} lightMode={lightMode}/>
      <Work setlightMode={setlightMode} lightMode={lightMode}/>
      <Marquee3 setlightMode={setlightMode} lightMode={lightMode}/>
      <About setlightMode={setlightMode} lightMode={lightMode}/>
      <Marquee4 setlightMode={setlightMode} lightMode={lightMode}/>
    </HomePageContainer>
  )
}

export default landing
