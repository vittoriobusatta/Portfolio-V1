import React from "react";
import styled from "styled-components";

import {
  secondColor,
  thirdColor,
  morgenWalsh,
  fourthColor,
  EmSpace,
  OldchildContent,
  secondLightColor,
  Title,
  Number,
  ContainerTitle,
  fourthLightColor,
  thirdLightColor,
} from "../Common";

const WorkContainer = styled.section`
  height: auto;
  width: 100%;
  display: inline-flex;
  position: relative;
  /*   @media (max-width: 1000px) {
    height: 140vh;
} */
`;

const WorkContent = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: repeat(28, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 30px;
  @media (max-width: 850px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(88, 1fr);
    grid-row-gap: 20px;
  }
  @media (max-width: 450px) {
    grid-row-gap: 10px;
  }
`;

const Div1 = styled.div`
  grid-area: 1 / 1 / 9 / 7;
  @media (max-width: 850px) {
    grid-area: 1 / 1 / 9 / 15;
  }
`;

const Thumbnails = styled.img`
  height: auto;
  width: 100%;
  position: relative;
`;

const AbDistribution = styled.div`
  position: relative;
  grid-area: 3 / 9 / 9 / 14;
  @media (max-width: 850px) {
    grid-area: 11 / 2 / 23 / 6;
  }
  @media (max-width: 450px) {
    grid-area: 12 / 2 / 24 / 6;
  }
`;

const Muteza = styled.div`
  grid-area: 11 / 2 / 17 / 7;
  @media (max-width: 850px) {
    grid-area: 26 / 2 / 38 / 6;
  }
  @media (max-width: 450px) {
    grid-area: 27 / 2 / 39 / 6;
  }
`;
const Sunnyside = styled.div`
  grid-area: 12 / 9 / 18 / 14;
  @media (max-width: 850px) {
    grid-area: 41 / 2 / 53 / 6;
  }
  @media (max-width: 450px) {
    grid-area: 42 / 2 / 54 / 6;
  }
`;
const Folio = styled.div`
  grid-area: 20 / 2 / 26 / 7;
  @media (max-width: 850px) {
    grid-area: 56 / 2 / 68 / 6;
  }
  @media (max-width: 450px) {
    grid-area: 57 / 2 / 69 / 6;
  }
`;
const FlowerShop = styled.div`
  grid-area: 21 / 9 / 27 / 14;
  @media (max-width: 850px) {
    grid-area: 71 / 2 / 83 / 6;
  }
  @media (max-width: 450px) {
    grid-area: 72 / 2 / 84 / 6;
  }
`;

const Content = styled.div`
  height: 20%;
  width: 100%;
  display: inline-flex;
  padding-top: 3rem;
`;
const ContentProject = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DateProject = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  font-size: max(1.8rem, 8px);
  text-align: right;
  color: ${(props) =>
    props.isLight === true ? secondLightColor : secondColor};
  font-family: ${morgenWalsh};
  letter-spacing: 0.1rem;
  white-space: nowrap;
  transition: all 0.3s ease-out;
  padding-left: 2.5rem;
`;
const Date = styled.p`
  font-size: max(1.8rem, 8px);
  text-align: right;
  color: ${(props) =>
    props.isLight === true ? fourthLightColor : fourthColor};
  font-family: ${morgenWalsh};
  letter-spacing: 0.1rem;
  padding-right: 3rem;
`;

const SvgDate = styled.svg`
  height: 2rem;
  width: 2rem;
  & path {
    fill: ${(props) =>
      props.isLight === true ? secondLightColor : secondColor};
    transition: all 0.3s ease-out;
  }
`;
const Vector = styled.svg`
  height: 4rem;
  width: 5rem;
  & path {
    fill: ${(props) =>
      props.isLight === true ? secondLightColor : secondColor};
    transition: all 0.3s ease-out;
  }
`;

const ContentProjectLink = styled.a`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:hover > svg > path {
    fill: ${(props) => (props.isLight === true ? thirdLightColor : thirdColor)};
  }
  &:hover > a {
    color: ${(props) =>
      props.isLight === true ? thirdLightColor : thirdColor};
  }
`;

function Work({ lightMode }) {
  return (
    <WorkContainer>
      <ContainerTitle>
        <div style={{ height: "auto", width: 100 + "%" }}>
          <div style={{ height: 100 + "%", width: 100 + "%" }}>
            <OldchildContent>
              <EmSpace isLight={lightMode}></EmSpace>
              <Number isLight={lightMode} className="oldchild2">
                02
              </Number>
            </OldchildContent>
          </div>
        </div>

        <div
          style={{ height: "auto", width: 100 + "%", paddingTop: 3 + "rem" }}
        >
          <div style={{ height: 100 + "%", width: 100 + "%" }}>
            <Title isLight={lightMode}>Projects</Title>
          </div>
        </div>
      </ContainerTitle>

      <WorkContent>
        <Div1></Div1>

        <AbDistribution>
          <Thumbnails></Thumbnails>

          <Content>
            <ContentProject>
              <ContentProjectLink
                isLight={lightMode}
                target="_blank"
                href="https://www.ab-distribution.re"
              >
                <Vector
                  isLight={lightMode}
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.54927 7.80501H0V8.5855H9.54927V9.75623L11.0727 8.19525L9.54927 6.63428V7.80501Z"
                    fill="#FFEDCB"
                  />
                  <path
                    d="M20.9998 8C20.9998 12.4183 17.4954 16 13.1725 16C8.8496 16 5.34521 12.4183 5.34521 8C5.34521 3.58172 8.8496 0 13.1725 0C17.4954 0 20.9998 3.58172 20.9998 8ZM5.72896 8C5.72896 12.2017 9.06154 15.6078 13.1725 15.6078C17.2834 15.6078 20.616 12.2017 20.616 8C20.616 3.79834 17.2834 0.392213 13.1725 0.392213C9.06154 0.392213 5.72896 3.79834 5.72896 8Z"
                    fill="#FFEDCB"
                  />
                </Vector>
                <Link isLight={lightMode}>View Project</Link>
              </ContentProjectLink>
            </ContentProject>
            <DateProject>
              <div
                style={{
                  height: "auto",
                  width: 100 + "%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <Date isLight={lightMode}>May. 2022</Date>
                <SvgDate
                  isLight={lightMode}
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.579 1.413H0.504V0H9V8.496H7.587V2.43L0.99 9L0 8.001L6.579 1.413Z"
                    fill="#FFEDCB"
                  />
                </SvgDate>
              </div>
            </DateProject>
          </Content>
        </AbDistribution>

        <Muteza>
          <Thumbnails className="Muteza"></Thumbnails>

          <Content>
            <ContentProject>
              <div
                style={{
                  height: "auto",
                  width: 100 + "%",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <ContentProjectLink
                  isLight={lightMode}
                  target="_blank"
                  href="https://tonii0.github.io/Muteza/"
                >
                  <Vector
                    isLight={lightMode}
                    width="21"
                    height="16"
                    viewBox="0 0 21 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.54927 7.80501H0V8.5855H9.54927V9.75623L11.0727 8.19525L9.54927 6.63428V7.80501Z"
                      fill="#FFEDCB"
                    />
                    <path
                      d="M20.9998 8C20.9998 12.4183 17.4954 16 13.1725 16C8.8496 16 5.34521 12.4183 5.34521 8C5.34521 3.58172 8.8496 0 13.1725 0C17.4954 0 20.9998 3.58172 20.9998 8ZM5.72896 8C5.72896 12.2017 9.06154 15.6078 13.1725 15.6078C17.2834 15.6078 20.616 12.2017 20.616 8C20.616 3.79834 17.2834 0.392213 13.1725 0.392213C9.06154 0.392213 5.72896 3.79834 5.72896 8Z"
                      fill="#FFEDCB"
                    />
                  </Vector>
                  <Link isLight={lightMode}>View Project</Link>
                </ContentProjectLink>
              </div>
            </ContentProject>
            <DateProject>
              <div
                style={{
                  height: "auto",
                  width: 100 + "%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <Date isLight={lightMode}>Jun. 2021</Date>
                <SvgDate
                  isLight={lightMode}
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.579 1.413H0.504V0H9V8.496H7.587V2.43L0.99 9L0 8.001L6.579 1.413Z"
                    fill="#FFEDCB"
                  />
                </SvgDate>
              </div>
            </DateProject>
          </Content>
        </Muteza>

        <Sunnyside>
          <Thumbnails className="Sunnyside"></Thumbnails>

          <Content>
            <ContentProject>
              <div
                style={{
                  height: "auto",
                  width: 100 + "%",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <ContentProjectLink
                  isLight={lightMode}
                  target="_blank"
                  href="https://sunnyside-p9e3uimjz-vittoriobusatta.vercel.app/"
                >
                  <Vector
                    isLight={lightMode}
                    width="21"
                    height="16"
                    viewBox="0 0 21 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.54927 7.80501H0V8.5855H9.54927V9.75623L11.0727 8.19525L9.54927 6.63428V7.80501Z"
                      fill="#FFEDCB"
                    />
                    <path
                      d="M20.9998 8C20.9998 12.4183 17.4954 16 13.1725 16C8.8496 16 5.34521 12.4183 5.34521 8C5.34521 3.58172 8.8496 0 13.1725 0C17.4954 0 20.9998 3.58172 20.9998 8ZM5.72896 8C5.72896 12.2017 9.06154 15.6078 13.1725 15.6078C17.2834 15.6078 20.616 12.2017 20.616 8C20.616 3.79834 17.2834 0.392213 13.1725 0.392213C9.06154 0.392213 5.72896 3.79834 5.72896 8Z"
                      fill="#FFEDCB"
                    />
                  </Vector>
                  <Link isLight={lightMode}>View Project</Link>
                </ContentProjectLink>
              </div>
            </ContentProject>
            <DateProject>
              <div
                style={{
                  height: "auto",
                  width: 100 + "%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <Date isLight={lightMode}>Feb. 2022</Date>
                <SvgDate
                  isLight={lightMode}
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.579 1.413H0.504V0H9V8.496H7.587V2.43L0.99 9L0 8.001L6.579 1.413Z"
                    fill="#FFEDCB"
                  />
                </SvgDate>
              </div>
            </DateProject>
          </Content>
        </Sunnyside>

        <Folio>
          <Thumbnails className="Folio"></Thumbnails>

          <Content>
            <ContentProject>
              <div
                style={{
                  height: "auto",
                  width: 100 + "%",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <ContentProjectLink
                  isLight={lightMode}
                  target="_blank"
                  href="https://www.tonibusatta.fr"
                >
                  <Vector
                    isLight={lightMode}
                    width="21"
                    height="16"
                    viewBox="0 0 21 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.54927 7.80501H0V8.5855H9.54927V9.75623L11.0727 8.19525L9.54927 6.63428V7.80501Z"
                      fill="#FFEDCB"
                    />
                    <path
                      d="M20.9998 8C20.9998 12.4183 17.4954 16 13.1725 16C8.8496 16 5.34521 12.4183 5.34521 8C5.34521 3.58172 8.8496 0 13.1725 0C17.4954 0 20.9998 3.58172 20.9998 8ZM5.72896 8C5.72896 12.2017 9.06154 15.6078 13.1725 15.6078C17.2834 15.6078 20.616 12.2017 20.616 8C20.616 3.79834 17.2834 0.392213 13.1725 0.392213C9.06154 0.392213 5.72896 3.79834 5.72896 8Z"
                      fill="#FFEDCB"
                    />
                  </Vector>
                  <Link isLight={lightMode}>View Project</Link>
                </ContentProjectLink>
              </div>
            </ContentProject>
            <DateProject>
              <div
                style={{
                  height: "auto",
                  width: 100 + "%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <Date isLight={lightMode}>May. 2021</Date>
                <SvgDate
                  isLight={lightMode}
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.579 1.413H0.504V0H9V8.496H7.587V2.43L0.99 9L0 8.001L6.579 1.413Z"
                    fill="#FFEDCB"
                  />
                </SvgDate>
              </div>
            </DateProject>
          </Content>
        </Folio>

        <FlowerShop>
          <Thumbnails className="FlowerShop"></Thumbnails>

          <Content>
            <ContentProject>
              <div
                style={{
                  height: "auto",
                  width: 100 + "%",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <ContentProjectLink
                  isLight={lightMode}
                  target="_blank"
                  href="https://vittoriobusatta.github.io/Aliyahmarinabfleurs/"
                >
                  <Vector
                    isLight={lightMode}
                    width="21"
                    height="16"
                    viewBox="0 0 21 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.54927 7.80501H0V8.5855H9.54927V9.75623L11.0727 8.19525L9.54927 6.63428V7.80501Z"
                      fill="#FFEDCB"
                    />
                    <path
                      d="M20.9998 8C20.9998 12.4183 17.4954 16 13.1725 16C8.8496 16 5.34521 12.4183 5.34521 8C5.34521 3.58172 8.8496 0 13.1725 0C17.4954 0 20.9998 3.58172 20.9998 8ZM5.72896 8C5.72896 12.2017 9.06154 15.6078 13.1725 15.6078C17.2834 15.6078 20.616 12.2017 20.616 8C20.616 3.79834 17.2834 0.392213 13.1725 0.392213C9.06154 0.392213 5.72896 3.79834 5.72896 8Z"
                      fill="#FFEDCB"
                    />
                  </Vector>
                  <Link isLight={lightMode}>View Project</Link>
                </ContentProjectLink>
              </div>
            </ContentProject>
            <DateProject>
              <div
                style={{
                  height: "auto",
                  width: 100 + "%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <Date isLight={lightMode}>Apr. 2021</Date>
                <SvgDate
                  isLight={lightMode}
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.579 1.413H0.504V0H9V8.496H7.587V2.43L0.99 9L0 8.001L6.579 1.413Z"
                    fill="#FFEDCB"
                  />
                </SvgDate>
              </div>
            </DateProject>
          </Content>
        </FlowerShop>
      </WorkContent>
    </WorkContainer>
  );
}

export default Work;
