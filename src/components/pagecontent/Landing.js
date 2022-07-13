import React from 'react';
import styled from 'styled-components';
import WorkSVG from "../../icons/fistcircle.svg";
import { ReactComponent as ArrowImg } from '../../icons/arrow.svg';
import {secondColor, thirdColor, morgenWalsh, roboto, fourthColor, fourthLightColor, secondLightColor} from '../Common';


const LandingContainer = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;
  @media (max-width: 850px) {
    height: 70vh;
  }
`

const LandingContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`
const ColumnOne = styled.div`
  height: 100%;
  width: 65%;
  display: flex;
  align-items: flex-end;
  padding-left: max(5rem, 20px);
  @media (max-width: 1000px) {
    justify-content: flex-end;
    height: 70%;
  }
`
const Column1Content = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  span {
      display: block;
      font-size: max(14.4rem, 20px);
      font-family: ${morgenWalsh};
      text-transform: uppercase;
      color: ${props => props.isLight === true ? fourthLightColor : fourthColor};
      white-space: nowrap;
      width: auto;

      &:nth-child(1) {
          transform: translate(10%,0);
      }
      &:nth-child(3) {
          transform: translate(32%,0);
      }
  }
`


const ColumnTwo = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 1000px) {
    justify-content: flex-end;
    width: 100%;
    height: 30%;
  }
`
const Column2Content = styled.div`
  position: relative;
  height: 70%;
  width: 60%;
  /* min-width: 80px; */
  background: url(${WorkSVG}) no-repeat center;
  background-size: contain;
  @media (max-width: 1000px) {
    height: 100%;
    width: 30%;
  }

  a {
    position: absolute;
    bottom: 55%;
    left: 38%;
    transform: translate(-50%, -50%);
    color: ${thirdColor};
    text-transform: uppercase;
    font-size: max(1.6rem, 5px);
    font-family: ${roboto};
    white-space: nowrap;
  }

  svg {
    position: absolute;
    top: 47%;
    right: 5%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    width: 22%; 
  @media (max-width: 1000px) {
  }
}
`
  
const Header = styled.header`
    height: auto;
    width: 100%;
    display: inline-flex;
    align-items: center;
    padding-left: max(5rem, 20px);
    padding-top: 2rem;
`

const Head = styled.div`
    height: auto;
    width: 100%;
    display: inline-flex;
`

const BigText = styled.h1`
  height: auto;
  width: auto;
  font-size: max(14rem, 20px);
  color: ${props => props.isLight === true ? fourthLightColor : fourthColor};
  font-family: ${morgenWalsh};
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  letter-spacing: .5rem;
  text-transform: uppercase;
`

const Indent = styled.span`
    display: block;
    height: max(1rem, 5px);
    width: max(6rem, 20px);
    background-color: ${props => props.isLight === true ? secondLightColor : secondColor};
    //margin-top: 2rem;
`

const Arrow = styled(ArrowImg)`
    height: max(5rem, 25px);
    width: max(5rem, 25px);
    margin: 6rem 0 0 3rem;
`






const landing = ({lightMode, setlightMode}) => {


  return (
    <LandingContainer>

      <Header>
        <Head>
          <div style={{height: 100 + "%", width: 90 + "%", display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <BigText isLight={lightMode}>Portfolio&nbsp;<Indent isLight={lightMode}/>&nbsp;V1<Arrow /></BigText>
          </div>
          
        </Head>
      </Header>

      <LandingContent>

        <ColumnOne>
            <Column1Content isLight={lightMode}>
                <span>Designer</span>
                <span>/ Front-End</span>
                <span>Developer</span>
            </Column1Content>
        </ColumnOne>

        <ColumnTwo>
            <Column2Content>
                <a>View Work</a>
                <svg viewBox="0 0 74 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M58.96 0L57.3763 1.58368L69.2326 13.44H0V15.68H69.2326L57.3741 27.5408L58.9578 29.1245L73.52 14.56L58.96 0Z" fill="#95ADCF"/></svg>
            </Column2Content>
        </ColumnTwo>

      </LandingContent>
    </LandingContainer>
  )
}

export default landing
