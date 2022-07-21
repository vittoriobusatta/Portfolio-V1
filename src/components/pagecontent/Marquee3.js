import React from "react";
import styled from "styled-components";
import {
  ContainerMarquee,
  MarqueeContent,
  MarqueeText,
  fourthColor,
  thirdLightColor,
  fourthLightColor,
  Indent,
  YellowText,
  WhiteText,
  thirdColor,
  secondColor,
  secondLightColor,
} from "../Common";

const WText = styled(WhiteText)`
  color: ${(props) =>
    props.isLight === true ? fourthLightColor : fourthColor};
`;
const Idt = styled(Indent)`
  color: ${(props) => (props.isLight === true ? thirdLightColor : thirdColor)};
`;
const YText = styled(YellowText)`
  color: ${(props) =>
    props.isLight === true ? secondLightColor : secondColor};
`;
const MarqueeC = styled(MarqueeContent)`
  border-top: solid 2px
    ${(props) => (props.isLight === true ? thirdLightColor : thirdColor)};
  border-bottom: solid 2px
    ${(props) => (props.isLight === true ? thirdLightColor : thirdColor)};
`;

function Marquee({ lightMode }) {
  return (
    <ContainerMarquee>
      <MarqueeC isLight={lightMode}>
        <MarqueeText>
          <WText isLight={lightMode}>About</WText>
          <Idt isLight={lightMode}>&nbsp;-&nbsp;</Idt>
          <YText isLight={lightMode}>About</YText>
          <Idt isLight={lightMode}>&nbsp;-&nbsp;</Idt>
          <WText isLight={lightMode}>About</WText>
          <Idt isLight={lightMode}>&nbsp;-&nbsp;</Idt>
          <YText isLight={lightMode}>About</YText>
          <Idt isLight={lightMode}>&nbsp;-&nbsp;</Idt>
          <WText isLight={lightMode}>About</WText>
          <Idt isLight={lightMode}>&nbsp;-&nbsp;</Idt>
          <YText isLight={lightMode}>About</YText>
          <Idt isLight={lightMode}>&nbsp;-&nbsp;</Idt>
        </MarqueeText>
        <MarqueeText>
          <WText isLight={lightMode}>About</WText>
          <Idt isLight={lightMode}>&nbsp;-&nbsp;</Idt>
          <YText isLight={lightMode}>About</YText>
          <Idt isLight={lightMode}>&nbsp;-&nbsp;</Idt>
          <WText isLight={lightMode}>About</WText>
          <Idt isLight={lightMode}>&nbsp;-&nbsp;</Idt>
          <YText isLight={lightMode}>About</YText>
          <Idt isLight={lightMode}>&nbsp;-&nbsp;</Idt>
          <WText isLight={lightMode}>About</WText>
          <Idt isLight={lightMode}>&nbsp;-&nbsp;</Idt>
          <YText isLight={lightMode}>About</YText>
          <Idt isLight={lightMode}>&nbsp;-&nbsp;</Idt>
        </MarqueeText>
      </MarqueeC>
    </ContainerMarquee>
  );
}

export default Marquee;
