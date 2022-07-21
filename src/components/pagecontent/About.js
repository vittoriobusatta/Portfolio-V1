import React from "react";
import styled from "styled-components";
import Img from "../../assets/img/PP.webp";
import {
  secondColor,
  secondLightColor,
  morgenWalsh,
  fourthColor,
  EmSpace,
  OldchildContent,
  Title,
  Number,
  ContainerTitle,
  roboto,
  fourthLightColor,
} from "../Common";

const AboutContainer = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    height: 80vh;
  }
  @media (max-width: 450px) {
    height: 60vh;
  }
`;

const AboutContainerLeft = styled.div`
  height: 100%;
  width: 55%;
  display: flex;
  align-items: flex-end;
  @media (max-width: 1000px) {
    width: 100%;
    height: 50%;
  }
`;
const AboutContainerRight = styled.div`
  height: 100%;
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    width: 100%;
    height: 50%;
    justify-content: flex-end;
    padding-top: 5rem;
  }
`;
const Paragraph = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 7rem;
  @media (max-width: 1000px) {
    justify-content: flex-start;
  }
`;
const PContent = styled.p`
  position: relative;
  height: auto;
  width: auto;
  font-family: ${roboto};
  font-size: max(2.4rem, 10px);
  line-height: 4rem;
  text-align: left;
  color: ${(props) =>
    props.isLight === true ? fourthLightColor : fourthColor};
  & span a {
    text-decoration: underline;
    color: ${(props) =>
      props.isLight === true ? fourthLightColor : fourthColor};
  }
  &::after {
    position: absolute;
    content: '"';
    left: -3rem;
    top: -1rem;
    font-family: ${morgenWalsh};
    font-size: 7rem;
    color: ${(props) =>
      props.isLight === true ? secondLightColor : secondColor};
  }
  &::before {
    position: absolute;
    content: '"';
    left: -3rem;
    bottom: -6rem;
    font-family: ${morgenWalsh};
    font-size: 7rem;
    color: ${(props) =>
      props.isLight === true ? secondLightColor : secondColor};
  }
`;
const NContent = styled.p`
  position: relative;
  height: auto;
  width: auto;
  font-family: ${roboto};
  font-size: max(2.4rem, 10px);
  line-height: 4rem;
  text-align: left;
  color: ${(props) =>
    props.isLight === true ? fourthLightColor : fourthColor};
  padding-bottom: 5rem;
`;
const ImageContainer = styled.div`
  height: 70%;
  width: 100%;
  @media (max-width: 1000px) {
    width: 50%;
    height: 100%;
  }
`;
const Image = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${Img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
`;

function About({ lightMode }) {
  return (
    <AboutContainer>
      <AboutContainerLeft>
        <ContainerTitle>
          <div style={{ height: "auto", width: 100 + "%" }}>
            <div style={{ height: 100 + "%", width: 100 + "%" }}>
              <OldchildContent>
                <EmSpace isLight={lightMode}></EmSpace>
                <Number isLight={lightMode} className="oldchild3">
                  03
                </Number>
              </OldchildContent>
            </div>
          </div>

          <div
            style={{ height: "auto", width: 100 + "%", paddingTop: 3 + "rem" }}
          >
            <div style={{ height: 100 + "%", width: 100 + "%" }}>
              <Title isLight={lightMode}>About</Title>
            </div>
          </div>
        </ContainerTitle>

        <Paragraph>
          <NContent isLight={lightMode}>Hi, I'm Vittorio</NContent>
          <PContent isLight={lightMode}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sollicitudin, odio ac lacinia consequat, urna ipsum dapibus felis,
            at iaculis nibh ligula ut ligula. Praesent dignissim purus id metus
            consectetur. Don’t hesitate to <span>contact me.</span>
          </PContent>
        </Paragraph>
      </AboutContainerLeft>

      <AboutContainerRight>
        <ImageContainer>
          <Image />
        </ImageContainer>
      </AboutContainerRight>
    </AboutContainer>
  );
}

export default About;
