import React from "react";
import styled from "styled-components";
import {
  secondColor,
  thirdColor,
  morgenWalsh,
  roboto,
  fourthColor,
  fourthLightColor,
  secondLightColor,
  thirdLightColor,
} from "../Common";

const LandingContainer = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;
  @media (max-width: 850px) {
    height: 70vh;
  }
  @media (max-width: 450px) {
    height: 60vh;
  }
  @media (max-width: 450px) {
    height: 60vh;
  }
`;
const Header = styled.header`
  height: auto;
  width: 100%;
  display: inline-flex;
  align-items: center;
  padding-left: max(5rem, 20px);
  padding-top: 2rem;
`;

const LandingContent = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;
const ColumnOne = styled.div`
  height: 100%;
  width: 65%;
  display: flex;
  align-items: flex-end;
  padding-left: max(5rem, 20px);
  @media (max-width: 1000px) {
    justify-content: flex-end;
    height: 70%;
    width: auto;
  }
`;
const Column1Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  span {
    display: block;
    font-size: max(14rem, 20px);
    font-family: ${morgenWalsh};
    text-transform: uppercase;
    color: ${(props) =>
      props.isLight === true ? fourthLightColor : fourthColor};
    white-space: nowrap;
    width: fit-content;

    &:nth-child(1) {
      transform: translate(10%, 0);
    }
    &:nth-child(3) {
      transform: translate(32%, 0);
    }
    @media (max-width: 650px) {
      font-size: 12rem;
    }
  }
`;

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
`;

const Head = styled.div`
  height: auto;
  width: 100%;
  display: inline-flex;
`;

const BigText = styled.h1`
  height: auto;
  width: auto;
  font-size: max(14rem, 20px);
  color: ${(props) =>
    props.isLight === true ? fourthLightColor : fourthColor};
  font-family: ${morgenWalsh};
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  @media (max-width: 650px) {
    font-size: 12rem;
  }
`;

const Indent = styled.span`
  display: block;
  height: max(1rem, 5px);
  width: max(6rem, 20px);
  background-color: ${(props) =>
    props.isLight === true ? secondLightColor : secondColor};
`;

const Span = styled.span`
  position: relative;
  width: auto;
  height: auto;
  cursor: pointer;

  &:hover > svg > path {
    fill: ${(props) =>
      props.isLight === true ? secondLightColor : secondColor};
  }
  &:hover > span > a {
    color: ${(props) =>
      props.isLight === true ? thirdLightColor : thirdColor};
  }
  &:hover > span > svg > path {
    fill: ${(props) => (props.isLight === true ? thirdLightColor : thirdColor)};
  }
`;

const TextContent = styled.span`
  width: auto;
  height: auto;
  position: absolute;
  top: 45%;
  left: 55%;
  transform: translate(-50%, -50%);
`;
const ProjectLink = styled.a`
  color: ${(props) => (props.isLight === true ? thirdLightColor : thirdColor)};
  text-transform: uppercase;
  font-size: max(1.6rem, 5px);
  font-family: ${roboto};
  white-space: nowrap;
  position: relative;
  right: 2rem;
`;
const Arrow = styled.svg`
  position: absolute;
  right: 0;
  top: 3rem;
  width: 7rem;
  height: auto;
  max-width: 100px;
  & path {
    fill: ${(props) => (props.isLight === true ? thirdLightColor : thirdColor)};
    transition: all 0.3s ease-out;
  }
`;
const Circle = styled.svg`
  width: 34rem;
  height: 34rem;
  max-width: 300px;
  & path {
    fill: ${(props) => (props.isLight === true ? thirdLightColor : thirdColor)};
    transition: all 0.3s ease-out;
  }
`;
const Fleche = styled.svg`
  width: auto;
  height: auto;
  max-width: 100px;
  & path {
    fill: ${(props) =>
      props.isLight === true ? secondLightColor : secondColor};
    transition: all 0.3s ease-out;
  }
`;

const Column2Content = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    height: 100%;
    width: auto;
  }
`;

const landing = ({ lightMode }) => {
  return (
    <LandingContainer>
      <Header>
        <Head>
          <div
            style={{
              height: 100 + "%",
              width: 90 + "%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <BigText isLight={lightMode}>
              Portfolio&nbsp;
              <Indent isLight={lightMode} />
              &nbsp;V1
              <Arrow />
              <Fleche
                isLight={lightMode}
                width="31"
                height="34"
                viewBox="0 0 31 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.715 26.0643L23.7142 27.1208L28.0971 22.6086L30.4898 25.2414L23.2138 32.7321C22.5533 33.4137 21.4803 33.3767 20.8193 32.6495L13.5539 24.6571L15.9508 22.1896L20.327 27.004L20.3277 25.9474C20.3363 13.9932 11.2407 3.99715 0.020518 3.6068L0.023101 4.36792e-05C13.114 0.455467 23.725 12.1187 23.715 26.0643Z"
                  fill="#FFEDCB"
                />
              </Fleche>
            </BigText>
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
            <Span isLight={lightMode}>
              <Circle
                isLight={lightMode}
                width="340"
                height="348"
                viewBox="0 0 340 348"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M307.79 256.503C278.659 297.929 230.491 325 176 325C87.0822 325 15 252.918 15 164C15 137.919 21.2014 113.287 32.2102 91.4969C61.341 50.0706 109.509 23 164 23C252.918 23 325 95.0822 325 184C325 210.081 318.799 234.713 307.79 256.503ZM318.652 238.713C324.706 221.601 328 203.185 328 184C328 93.4253 254.575 20 164 20C116.016 20 72.8449 40.6076 42.8545 73.4553C71.8326 30.9258 120.655 3 176 3C264.918 3 337 75.0822 337 164C337 190.967 330.37 216.385 318.652 238.713ZM310.371 258.048C329.042 231.421 340 198.99 340 164C340 73.4253 266.575 0 176 0C112.07 0 56.683 36.5802 29.6292 89.9517C10.9579 116.579 0 149.01 0 184C0 274.575 73.4253 348 164 348C227.93 348 283.317 311.42 310.371 258.048ZM297.145 274.545C267.155 307.392 223.984 328 176 328C85.4253 328 12 254.575 12 164C12 144.815 15.2944 126.399 21.3483 109.287C9.62979 131.615 3 157.033 3 184C3 272.918 75.0822 345 164 345C219.345 345 268.167 317.074 297.145 274.545Z"
                  fill="#95ADCF"
                />
              </Circle>

              <TextContent>
                <ProjectLink isLight={lightMode}>Last Projects</ProjectLink>

                <Arrow
                  isLight={lightMode}
                  viewBox="0 0 74 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M58.96 0L57.3763 1.58368L69.2326 13.44H0V15.68H69.2326L57.3741 27.5408L58.9578 29.1245L73.52 14.56L58.96 0Z" />
                </Arrow>
              </TextContent>
            </Span>
          </Column2Content>
        </ColumnTwo>
      </LandingContent>
    </LandingContainer>
  );
};

export default landing;

// /* Smartphones (portrait and landscape) ----------- */
// @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
// /* Styles */
// }

// /* Smartphones (landscape) ----------- */
// @media only screen and (min-width : 321px) {
// /* Styles */
// }

// /* Smartphones (portrait) ----------- */
// @media only screen and (max-width : 320px) {
// /* Styles */
// }

// /* iPads (portrait and landscape) ----------- */
// @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
// /* Styles */
// }

// /* iPads (landscape) ----------- */
// @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
// /* Styles */
// }

// /* iPads (portrait) ----------- */
// @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
// /* Styles */
// }

// /* Desktops and laptops ----------- */
// @media only screen and (min-width : 1224px) {
// /* Styles */
// }

// /* Large screens ----------- */
// @media only screen and (min-width : 1824px) {
// /* Styles */
// }
