import './font.css';
import './reset.css';
import { createGlobalStyle } from 'styled-components';
import { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import Menu from './components/Menu'
import HomePage from './components/Homepage';
import ContactPage from './components/ContactPage';
import Work from './components/Work';
import WorkBtn from './components/WorkBtn';
import {secondColor, primaryLightColor, primaryColor, secondLightColor, thirdLightColor, thirdColor} from './components/Common';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    transition: all .3s ease-in;

    @media (max-width: 1200px) {
      font-size: 50%;
    }
    @media (max-width: 850px) {
      font-size: 40%;
    }
    @media (max-width: 650px) {
      font-size: 30%;
    }
    @media (max-width: 380px) {
      font-size: 20%;
    }
  }

  body {
    background-color: ${props => props.isLight === true ? primaryLightColor : primaryColor};
  }

  ::-moz-selection {
    background: ${props => props.isLight === true ? "#AAAE8E" : "#305275"};
    text-shadow: none;
  }
  ::selection {
    background: ${props => props.isLight === true ? "#AAAE8E" : "#305275"};
    text-shadow: none;
  }
  ::-webkit-scrollbar{
    width: 10px;
    border-left: 2px solid ${props => props.isLight === true ? thirdLightColor : thirdColor};
  }
  ::-webkit-scrollbar-thumb{
    background-color: ${props => props.isLight === true ? secondLightColor : secondColor};
    transition: all .3s ease-in;
    border-radius: 15px;
    &:hover {
      background-color: ${props => props.isLight === true ? thirdLightColor : thirdColor};
    }
  }
`




function App() {

  const [lightMode, setlightMode] = useState(false)
  const [openContact, setOpenContact] = useState(false)
  const [openHome, setOpenHome] = useState(true)

  const [openMenu, setOpenMenu] = useState(false)
  const [scrollTop, setScrollTop] = useState(0);
 
  const checkIsMobile = () => {
    return window.matchMedia("(max-width: 850px)").matches
  }

  useEffect(() => {
    function onScroll() {
    let navBar = document.getElementById("navbar")

      if (!checkIsMobile()) {
        navBar.style.top = "0";
        return
      }

      if (openMenu) {
        navBar.style.top = "0";
        return 
      }

      let currentPosition = window.pageYOffset;
      if (currentPosition > scrollTop) {
        navBar.style.top = "-100px";
      } else {
        navBar.style.top = "0";
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop, openMenu]);




  return (
    <div className="App" style={{display: "flex",justifyContent: "flex-end"}}>
      <GlobalStyle isLight={lightMode} />
      {/* <Menu setOpenMenu={setOpenMenu} openMenu={openMenu} setOpenHome={setOpenHome} openHome={openHome}/> */}
      <BrowserRouter>
        <Navbar
          setOpenMenu={setOpenMenu} 
          openMenu={openMenu} 
          setlightMode={setlightMode} 
          lightMode={lightMode} 
          setOpenContact={setOpenContact} 
          openContact={openContact}
          setOpenHome={setOpenHome} 
          openHome={openHome}
        />
        <Routes>
          <Route path="/" element={ <HomePage setlightMode={setlightMode} lightMode={lightMode}/>} />
          <Route path="contact" element={<ContactPage setlightMode={setlightMode} lightMode={lightMode}/>} />
          <Route path="Work" element={<Work setlightMode={setlightMode} lightMode={lightMode}/>} />
        </Routes>
      
      {<WorkBtn setlightMode={setlightMode} lightMode={lightMode}/>}
        
      </BrowserRouter>

    </div>
  );
}

export default App;
