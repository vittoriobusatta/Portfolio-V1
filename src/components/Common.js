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
  font-size: max(1.4rem);
  writing-mode: vertical-lr;
  color: ${props => props.isLight === true ? secondLightColor : secondColor};
  font-family: ${roboto};
  text-transform: uppercase;
  transition: all .3s ease-out;
  font-variation-settings: 'GRAD' 0, 'slnt' 0, 'XTRA' 483, 'XOPQ' 124, 'YOPQ' 91, 
  'YTLC' 514, 'YTUC' 712, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738;
`

export const EmSpace = styled.div `
  left: 100px;
  height: 6px;
  width: 10%;
  min-width: 30px;
  background: ${props => props.isLight === true ? secondLightColor : secondColor};
  margin-right: 5rem;
  margin-bottom: 1.5rem;
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

  &.oldchild0::before {
    position: absolute;
    content: "00";
    left: 3px;
    top: 1px;
    color: transparent;
    -webkit-text-stroke: 1px ${props => props.isLight === true ? secondLightColor : secondColor};
  }
  &.oldchild1::before {
    position: absolute;
    content: "01";
    left: 3px;
    top: 1px;
    color: transparent;
    -webkit-text-stroke: 1px ${props => props.isLight === true ? secondLightColor : secondColor};
  }
  &.oldchild2::before {
    position: absolute;
    content: "02";
    left: 3px;
    top: 1px;
    color: transparent;
    -webkit-text-stroke: 1px ${props => props.isLight === true ? secondLightColor : secondColor};
  }
  &.oldchild3::before {
    position: absolute;
    content: "03";
    left: 3px;
    top: 1px;
    color: transparent;
    -webkit-text-stroke: 1px ${props => props.isLight === true ? secondLightColor : secondColor};
  }
  &.oldchild5::before {
    position: absolute;
    content: "05";
    left: 3px;
    top: 1px;
    color: transparent;
    -webkit-text-stroke: 1px ${props => props.isLight === true ? secondLightColor : secondColor};
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