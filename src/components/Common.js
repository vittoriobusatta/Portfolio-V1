import styled, {keyframes} from 'styled-components';

export const primaryColor = "#0D1B2A"
export const secondColor = "#FFEDCB"
export const thirdColor = "#95ADCF"
export const fourthColor = "#F1F1F1"

export const primaryLightColor = "#D9F4FE"
export const secondLightColor = "#00B2FD"
export const thirdLightColor = "#8A2233"
export const fourthLightColor = "#FF5945"

export const morgenWalsh = "Morgenwalsh"
export const roboto = "Roboto Flex, sans-serif;"
export const ancient = "Ancient"


export const LinksA = styled.a`
  position: relative;
  font-size: max(1.2rem);
  writing-mode: vertical-lr;
  color: ${props => props.isLight === true ? secondLightColor : secondColor};
  font-family: ${roboto};
  text-transform: uppercase;
  transition: all .3s ease-out;
  font-variation-settings: 'GRAD' 0, 'slnt' 0, 'XTRA' 483, 'XOPQ' 124, 'YOPQ' 91, 
  'YTLC' 514, 'YTUC' 712, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738;
`

export const WorkLinks = styled.a`
  position: relative;
  font-family: ${morgenWalsh};
  font-style: normal;
  font-weight: 400;
  font-size: max(8rem);
  color: ${props => props.isLight === true ? secondLightColor : secondColor};
  white-space: nowrap;
  transition: all .3s ease-out;

  &::before {
    position: absolute;
    content: '';
    left: -20px;
    top: 15px;
    font-size: max(3rem);
    font-family: ${ancient};
  }

  &:hover {
    color: ${props => props.isLight === true ? thirdLightColor : thirdColor};
  }

  &:after {    
    content: "";
    display: block;
    height: 1.4rem;
    top: 50%;
    left: 0;
    transform: translate(0, 0%);
    position: absolute;
    background: ${props => props.isLight === true ? secondLightColor : secondColor};
    transition: width 0.3s ease 0s, right 0.3s ease 0s;
    width: 0;
  }
  &:hover:after { 
    width: 100%; 
    right: 0;
  }

  @media (max-width: 1100px) {
      font-size: 6.5rem;
  }
`

export const EmSpace = styled.div `
  left: 100px;
  height: 6px;
  width: 10%;
  min-width: 30px;
  max-width: 60px;
  background: ${props => props.isLight === true ? secondLightColor : secondColor};
  margin-right: 5rem;
  margin-bottom: 1.5rem;
  border-radius: 5%;
`

export const OldchildContent = styled.div `
  position: relative;
  height: 100%;
  width: auto;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
`

export const Title = styled.h1 `
  font-size: max(9.6rem, 35px);
  font-family: ${morgenWalsh};
  color: ${props => props.isLight === true ? fourthLightColor : fourthColor};
`
export const Number = styled.span `
  position: relative;
  font-size: max(6.4rem,30px);
  font-family: ${morgenWalsh};
  color: ${props => props.isLight === true ? fourthLightColor : fourthColor};
  letter-spacing: .3rem;

  &::before {
    position: absolute;
    left: 3px;
    top: 1px;
    color: transparent;
    -webkit-text-stroke: 1px ${props => props.isLight === true ? secondLightColor : secondColor};
  }

  &.oldchild0::before {
    content: "00";
  }
  &.oldchild1::before {
    content: "01";
  }
  &.oldchild2::before {
    content: "02";
  }
  &.oldchild3::before {
    content: "03";
  }
  &.oldchild5::before {
    content: "05";
  }
  &.oldchild6::before {
    content: "06";
  }
`

export const ContainerTitle = styled.div `
  position: absolute;
  height: auto;
  width: auto;
  top: 8rem;
  left: 8rem;

`
export const ContainerMarquee = styled.section`
  height: 11vh;
  width: 100%;
  @media (max-width: 1000px) {
      height: 10vh;
  }
  @media (max-width: 450px) {
      height: 7vh;
  }
`

export const MarqueeContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
`

export const animMarquee = keyframes`
  0% {
  transform: translate(0, 0);
  }
  100% {
      transform: translate(-100%, 0);
  }
`;

    

export const MarqueeText = styled.span`
  font-size: max(8rem,10px);
  text-transform: uppercase;
  white-space: nowrap;
  animation: ${animMarquee} 20s linear infinite;
  font-style: italic;
  color: ${secondColor};
  font-family: ${roboto};
`

export const WhiteText = styled.span`
  color: #fff;
`
export const Indent = styled.span`
  color: ${thirdColor};
`
export const YellowText = styled.span`
  color: ${secondColor};
`