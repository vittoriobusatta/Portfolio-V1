import React from "react";
import styled from "styled-components";
import {
  secondColor,
  morgenWalsh,
  thirdColor,
  roboto,
  fourthColor,
  EmSpace,
  OldchildContent,
  Title,
  Number,
  fourthLightColor,
  thirdLightColor,
  secondLightColor,
} from "../Common";

const EducationContainer = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  @media (max-width: 1300px) {
    flex-direction: column;
  }
  @media (max-width: 850px) {
    height: 90vh;
  }
`;
const EducationContainerLeft = styled.div`
  height: 100%;
  width: 45%;
  @media (max-width: 1300px) {
    width: 100%;
    display: inline-flex;
    height: 30%;
  }
  @media (max-width: 850px) {
    height: 25%;
  }
`;
const EducationContainerRight = styled.div`
  height: 100%;
  width: 55%;
  @media (max-width: 1300px) {
    width: 100%;
    height: 70%;
  }
`;
const ScolarityContainer = styled.div`
  height: 100%;
  width: 100%;
`;
const ScolarityContent = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr repeat(5, 1fr) 1fr 0.05fr 1fr repeat(6, 1fr) 0.5fr;
  grid-template-rows: repeat(19, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media (max-width: 850px) {
    grid-template-columns:
      0.5fr repeat(4, 1fr) 0.5fr 0.06fr 0.5fr repeat(6, 1fr)
      0.5fr;
  }
  @media (max-width: 400px) {
    grid-template-columns: 0.2fr 2fr 0.5fr 0.05fr 0.8fr 2fr 0.2fr;
    grid-template-rows: repeat(20, 1fr);
  }
`;

const Div1 = styled.div`
  grid-area: 3 / 8 / 19 / 9;
  background: ${(props) =>
    props.isLight === true ? secondLightColor : secondColor};
  border-radius: 20px;
  @media (max-width: 850px) {
    grid-area: 3 / 7 / 18 / 8;
  }
  @media (max-width: 400px) {
    grid-area: 1 / 4 / 18 / 5;
  }
`;
const Institution = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;
const Description = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const FirstInstitution = styled(Institution)`
  grid-area: 3 / 3 / 7 / 7;
  @media (max-width: 850px) {
    grid-area: 3 / 2 / 7 / 6;
  }
  @media (max-width: 400px) {
    grid-area: 1 / 2 / 7 / 3;
  }
`;
const SecondInstitution = styled(Institution)`
  grid-area: 9 / 3 / 13 / 7;
  @media (max-width: 850px) {
    grid-area: 9 / 2 / 13 / 6;
  }
  @media (max-width: 400px) {
    grid-area: 8 / 2 / 14 / 3;
  }
`;
const ThirdInstitution = styled(Institution)`
  grid-area: 15 / 3 / 19 / 7;
  @media (max-width: 850px) {
    grid-area: 15 / 2 / 19 / 6;
  }
  @media (max-width: 400px) {
    grid-area: 15 / 2 / 21 / 3;
  }
`;

const FirstDescription = styled(Description)`
  grid-area: 3 / 10 / 7 / 16;
  @media (max-width: 850px) {
    grid-area: 3 / 10 / 7 / 15;
  }
  @media (max-width: 400px) {
    grid-area: 1 / 6 / 7 / 7;
  }
`;
const SecondDescription = styled(Description)`
  grid-area: 9 / 10 / 13 / 16;
  @media (max-width: 850px) {
    grid-area: 9 / 10 / 13 / 15;
  }
  @media (max-width: 400px) {
    grid-area: 8 / 6 / 14 / 7;
  }
`;
const ThirdDescription = styled(Description)`
  grid-area: 15 / 10 / 19 / 16;
  @media (max-width: 850px) {
    grid-area: 15 / 10 / 19 / 15;
  }
  @media (max-width: 400px) {
    grid-area: 15 / 6 / 21 / 7;
  }
`;

const Div8 = styled.div`
  position: relative;
  grid-area: 3 / 8 / 4 / 9;
  @media (max-width: 850px) {
    grid-area: 3 / 7 / 4 / 8;
  }
  @media (max-width: 400px) {
    grid-area: 1 / 4 / 2 / 5;
  }
`;
const Div9 = styled.div`
  position: relative;
  grid-area: 9 / 8 / 10 / 9;
  @media (max-width: 850px) {
    grid-area: 9 / 7 / 10 / 8;
  }
  @media (max-width: 400px) {
    grid-area: 8 / 4 / 9 / 5;
  }
`;
const Div10 = styled.div`
  position: relative;
  grid-area: 15 / 8 / 16 / 9;
  @media (max-width: 850px) {
    grid-area: 15 / 7 / 16 / 8;
  }
  @media (max-width: 400px) {
    grid-area: 15 / 4 / 16 / 5;
  }
`;

const Circle = styled.span`
  position: absolute;
  top: 13px;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) =>
    props.isLight === true ? secondLightColor : secondColor};
  @media (max-width: 850px) {
    width: 15px;
    height: 15px;
    top: 0;
  }
`;
const Layout = styled.span`
  height: auto;
  width: auto;
`;
const InstitutionName = styled.h3`
  color: ${(props) =>
    props.isLight === true ? fourthLightColor : fourthColor};
  font-size: max(3rem, 15px);
  font-family: ${roboto};
  line-height: max(5rem, 20px);
  width: auto;
  padding-bottom: max(1.5rem, 10px);
`;
const Degree = styled.h3`
  font-size: max(2.4rem, 15px);
  color: ${(props) =>
    props.isLight === true ? fourthLightColor : fourthColor};
  font-family: ${roboto};
  line-height: max(5rem, 20px);
  padding-bottom: max(1.5rem, 10px);
`;
const Paragraph = styled.p`
  font-size: max(1.3rem, 10px);
  color: ${(props) =>
    props.isLight === true ? fourthLightColor : fourthColor};
  line-height: max(2rem, 20px);
  font-family: ${roboto};
  width: 100%;
  & span {
    color: ${(props) =>
      props.isLight === true ? thirdLightColor : thirdColor};
  }
  @media (max-width: 400px) {
    font-size: 9px;
  }
`;
const CompilationYear = styled.span`
  font-size: max(1.4rem, 8px);
  font-family: ${morgenWalsh};
  color: ${(props) =>
    props.isLight === true ? secondLightColor : secondColor};
  font-weight: bold;
  letter-spacing: 0.2rem;
  white-space: nowrap;
`;
const WrapperTitle = styled.div`
  height: 50%;
  width: 100%;
  position: relative;
  @media (max-width: 1300px) {
    width: 50%;
    height: 100%;
  }
  @media (max-width: 850px) {
    width: 60%;
  }
`;
const Wrap = styled.div`
  height: auto;
  width: 100%;
`;
const Auto = styled.span`
  height: auto;
  width: auto;
  position: absolute;
  top: 5rem;
  left: 5rem;
`;
const CuriculumContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 1300px) {
    width: 50%;
    height: 100%;
  }
  @media (max-width: 850px) {
    width: 40%;
  }
`;

const CuriculumContent = styled.div`
  position: relative;
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 1300px) {
    height: auto;
    width: auto;
    position: absolute;
    top: 5rem;
    right: 5rem;
  }
`;
const CuriculumText = styled.a`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) =>
    props.isLight === true ? secondLightColor : secondColor};
  font-size: max(2.4rem, 10px);
  font-family: ${morgenWalsh};
  text-align: center;
  transition: all 0.3s ease-out;
`;

const Svg = styled.svg`
  width: 26rem;
  height: 26rem;
  & circle {
    stroke: ${(props) =>
      props.isLight === true ? thirdLightColor : thirdColor};
    transition: all 0.3s ease-out;
  }
`;
const Span = styled.a`
  width: auto;
  height: auto;
  position: relative;
  &:hover > svg > circle {
    stroke: ${(props) =>
      props.isLight === true ? secondLightColor : secondColor};
  }
  &:hover > a {
    color: ${(props) =>
      props.isLight === true ? thirdLightColor : thirdColor};
  }
`;

function education({ lightMode }) {
  return (
    <EducationContainer>
      <EducationContainerLeft>
        <WrapperTitle>
          <Auto>
            <Wrap>
              <OldchildContent>
                <EmSpace isLight={lightMode}></EmSpace>
                <Number isLight={lightMode} className="oldchild1">
                  01
                </Number>
              </OldchildContent>
            </Wrap>

            <Wrap style={{ paddingTop: 3 + "rem" }}>
              <Title isLight={lightMode}>Education</Title>
            </Wrap>
          </Auto>
        </WrapperTitle>

        <CuriculumContainer>
          <CuriculumContent>
            <Span
              isLight={lightMode}
              href="#"
              download="Curiculum Vitae Busatta.pdf"
            >
              <Svg
                isLight={lightMode}
                width="260"
                height="260"
                viewBox="0 0 340 348"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="176"
                  cy="164"
                  r="162.5"
                  stroke="#95ADCF"
                  strokeWidth="3"
                />
                <circle
                  cx="164"
                  cy="184"
                  r="162.5"
                  stroke="#95ADCF"
                  strokeWidth="3"
                />
              </Svg>
              <CuriculumText isLight={lightMode}>DOWNLOAD CV</CuriculumText>
            </Span>
          </CuriculumContent>
        </CuriculumContainer>
      </EducationContainerLeft>

      <EducationContainerRight>
        <ScolarityContainer>
          <ScolarityContent>
            <Div1 isLight={lightMode} />

            <FirstInstitution>
              <Layout>
                <InstitutionName isLight={lightMode}>
                  Lycée Nelson Mandela
                </InstitutionName>
                <CompilationYear isLight={lightMode}>
                  2021 - 2023
                </CompilationYear>
              </Layout>
            </FirstInstitution>

            <FirstDescription>
              <Degree isLight={lightMode}>BTS SIO</Degree>

              <Paragraph isLight={lightMode}>
                Spécialité <span> SISR </span>
                (Solutions d'Infrastructure, Systèmes et Réseaux), Lycée Nelson
                Mandela, Bras-Fusil, La Réunion
              </Paragraph>
            </FirstDescription>

            <SecondInstitution>
              <Layout>
                <InstitutionName isLight={lightMode}>
                  Lycée Amiral Bouvet
                </InstitutionName>
                <CompilationYear isLight={lightMode}>
                  2018 - 2021
                </CompilationYear>
              </Layout>
            </SecondInstitution>

            <SecondDescription>
              <Degree isLight={lightMode}>BAC STI2D</Degree>

              <Paragraph isLight={lightMode}>
                Spécialité <span>EE</span> (Energie Environnement),
                Saint-Benoît, La Réunion
              </Paragraph>
            </SecondDescription>

            <ThirdInstitution>
              <Layout>
                <InstitutionName isLight={lightMode}>
                  Collège Hubert Delisle
                </InstitutionName>
                <CompilationYear isLight={lightMode}>
                  2015 - 2018
                </CompilationYear>
              </Layout>
            </ThirdInstitution>

            <ThirdDescription>
              <Degree isLight={lightMode}>BREVET</Degree>

              <Paragraph isLight={lightMode}>
                Diplôme national du brevet, Collège Hubert Delisle,
                Saint-Benoît, La Réunion
              </Paragraph>
            </ThirdDescription>

            <Div8>
              <Circle isLight={lightMode} />
            </Div8>
            <Div9>
              <Circle isLight={lightMode} />
            </Div9>
            <Div10>
              <Circle isLight={lightMode} />
            </Div10>
          </ScolarityContent>
        </ScolarityContainer>
      </EducationContainerRight>
    </EducationContainer>
  );
}

export default education;
