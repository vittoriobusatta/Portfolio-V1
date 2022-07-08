import React from 'react'
import styled from 'styled-components';
import { secondColor, morgenWalsh, thirdColor, roboto, fourthColor, EmSpace, OldchildContent, Title, Number, ContainerTitle, fourthLightColor, thirdLightColor, secondLightColor} from '../Common';
import CuriculomSVG from "../../icons/circle.svg";

const EducationContainer = styled.section`
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    @media (max-width: 1300px) {
    flex-direction: column;
    height: 120vh;
  }
    @media (max-width: 850px) {
    height: 100vh;
  }
`
const EducationContainerLeft = styled.div`
    height: 100%;
    width: 45%;
    @media (max-width: 1300px) {
        width: 100%;
        display: inline-flex;
        height: 25%;
    }
`
const EducationContainerRight = styled.div`
    height: 100%;
    width: 55%;
    @media (max-width: 1300px) {
        width: 100%;
        height: 75%;
    }
`


const CuriculumContainer = styled.div `
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    @media (max-width: 1300px) {
        height: 100%;
    }
`

const Curiculum = styled.div `
    position: relative;
    height: 80%;
    width: auto;
    min-width: 220px;
    background: url(${CuriculomSVG}) no-repeat center;
    background-size: contain;
    @media (max-width: 650px) {
        height: 60%;
    }
`
const CuriculumContent = styled.div `
    height: 80%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    @media (max-width: 1300px) {
        justify-content: flex-end;
        align-items: center;
    }
`
const CuriculumText = styled.span `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    color: ${secondColor};
    font-size: max(2.4rem, 10px);
    font-family: ${morgenWalsh};
    text-align: center;
    transition: all .3s ease-out;
    &:hover {
        color: ${thirdColor};
    }
`
const Items = styled.div`
    height: 33.33%;
    width: 100%;
    display: inline-flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;

    .line1::before{content: ""; position: absolute; top: 58px; right: -7px; width: 15px; height: 15px; border-radius: 50%; background: ${props => props.isLight === true ? secondLightColor : secondColor};}
    .line2::before{content: ""; position: absolute; top: 56px; right: -7px; width: 15px; height: 15px; border-radius: 50%; background: ${props => props.isLight === true ? secondLightColor : secondColor};}
    .line3::before{content: ""; position: absolute; top: 56px; right: -7px; width: 15px; height: 15px; border-radius: 50%; background: ${props => props.isLight === true ? secondLightColor : secondColor};}
` 
const Compilation = styled.div`
    display: flex;
    align-items: flex-start;
    height: 100%;
    width: 35%;
    min-width: 150px;
    padding-top: 5rem;
` 
const CompilationSpan = styled.div`
    color: ${props => props.isLight === true ? fourthLightColor : fourthColor};
    font-size: max(3rem, 15px);
    font-family: ${roboto};
    line-height: 5rem;

` 
const CompilationName = styled.span`
    color: ${props => props.isLight === true ? fourthLightColor : fourthColor};
    font-size: max(3rem, 15px);
    font-family: ${roboto};
    line-height: 80%;
` 
const CompilationYear = styled.span`
    font-size: max(1.4rem,8px);
    font-family: ${morgenWalsh};
    color:${props => props.isLight === true ? secondLightColor : secondColor};
    font-weight: bold;
    letter-spacing: .2rem;
    line-height: 3.5rem;
    /* max-width: 80px; */
    white-space: nowrap;
` 

const CompilationLine = styled.span`
    height: 100%;
    position: relative;
    width: 2px;
    background: ${props => props.isLight === true ? secondLightColor : secondColor};
` 
const Degree = styled.span`
    font-size: max(2.4rem, 15px );
    color: ${props => props.isLight === true ? fourthLightColor : fourthColor};
    font-family: ${roboto};
` 
const Paragraph = styled.p`
     font-size: max(1.3rem,8px);
    color: ${props => props.isLight === true ? thirdLightColor : thirdColor};
    line-height: max(2rem, 12px);
    font-family: ${roboto};
    width: 100%;
    min-width: 150px;
` 



function education({lightMode, setlightMode}) {
  return (
    <EducationContainer>

        <EducationContainerLeft>

            <ContainerTitle>

                <div style={{height: 'auto', width: 100 + "%"}}>
                    <div style={{height: 100 + "%", width: 100 + "%"}}>
                        <OldchildContent>
                            <EmSpace isLight={lightMode}></EmSpace>
                            <Number isLight={lightMode} className="oldchild1">01</Number>
                        </OldchildContent>
                        
                    </div>
                </div>

                <div style={{height: 'auto', width: 100 + "%", paddingTop: 3 + "rem"}}>
                    <div style={{height: 100 + "%", width: 100 + "%"}}>
                        <Title isLight={lightMode}>Education</Title>
                    </div>
                </div>

            </ContainerTitle>

            <CuriculumContainer>
                <CuriculumContent>
                    
                    <Curiculum>
                        <a href='#' download="Curiculum Vitae Busatta.pdf">
                            <CuriculumText>DOWNLOAD CV</CuriculumText>
                        </a>
                    </Curiculum>
                        
                </CuriculumContent>
            </CuriculumContainer>

        </EducationContainerLeft>

        <EducationContainerRight>

            {/* <ScolarityContainer>
                <ScolarityContent>
                    
                </ScolarityContent>
            </ScolarityContainer> */}

            <div style={{height: 100 + "%", width: 100 + "%", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{height: 80 + "%", width: 100 + "%"}}>
                    <div style={{height: 100 + "%", width: 100 + "%", display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                        <div style={{height: 100 + "%", width: 90 + "%", display: 'flex', flexDirection: 'column'}}>

                            <Items isLight={lightMode}>

                                <Compilation>
                                    <div style={{height: "auto", width: 80 + "%", display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'column'}}>
                                        <div style={{paddingBottom: 1.5 + "rem"}}>
                                            <CompilationSpan isLight={lightMode}>Lycee Nelson</CompilationSpan>
                                        </div> 
                                        <div style={{width: 100 + "%"}}>
                                            <div style={{height: 100 + "%", width: 100 + "%", display: 'flex', justifyContent: 'space-between'}}>
                                                <CompilationName isLight={lightMode}>&nbsp;Mandela</CompilationName>
                                                <CompilationYear isLight={lightMode}>2021 - 2023</CompilationYear>
                                            </div>
                                        </div>
                                    </div>
                                </Compilation>

                                <CompilationLine isLight={lightMode} className="line1"></CompilationLine>

                                <div style={{height: 100 + "%", width: 60 + "%", display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', paddingTop: 5 + "rem"}}>
                                    <div style={{height: 100 + "%", width: 87 + "%", display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start',flexDirection: 'column'}}>
                                        <Degree isLight={lightMode}>BTS SIO (2ème Année)</Degree>

                                        <div style={{height: 100 + "%", width: 100 + "%", paddingTop: 20 + "px"}}>
                                            <Paragraph isLight={lightMode}>
                                            Spécialité SISR (Solutions d'Infrastructure, Systèmes et Réseaux),
                                            Lycée Nelson Mandela, Bras-Fusil, La Réunion
                                            </Paragraph>
                                        </div>
                                    </div>
                                    
                                </div>

                            </Items>

                            <Items isLight={lightMode}>

                                <Compilation>
                                    <div style={{height: "auto", width: 80 + "%", display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'column'}}>
                                        <div style={{paddingBottom: 1.5 + "rem"}}>
                                            <CompilationSpan isLight={lightMode}>Lycee Amiral</CompilationSpan>
                                        </div>
                                        <div style={{width: 100 + "%"}}>
                                            <div style={{height: 100 + "%", width: 100 + "%", display: 'flex', justifyContent: 'space-between'}}>
                                                <CompilationName isLight={lightMode}>&nbsp;Bouvet</CompilationName>
                                                <CompilationYear isLight={lightMode}>2015 - 2018</CompilationYear>
                                            </div>
                                        </div>
                                    </div>
                                </Compilation>

                                <CompilationLine isLight={lightMode} className="line2"></CompilationLine>

                                <div style={{height: 100 + "%", width: 60 + "%", display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', paddingTop: 5 + "rem"}}>
                                    <div style={{height: 100 + "%", width: 87 + "%", display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start',flexDirection: 'column'}}>
                                        <Degree isLight={lightMode}>BAC STI2D</Degree>

                                        <div style={{height: 100 + "%", width: 100 + "%", paddingTop: 20 + "px"}}>
                                            <Paragraph isLight={lightMode}>
                                                Baccalauréat série STI2D (Sciences et Technologies de l'Industrie et du Développement Durable), 
                                                spécialité EE (Energie Environnement),
                                                Saint-Benoît, La Réunion 
                                            </Paragraph>
                                        </div>
                                    </div>
                                    
                                </div>

                            </Items>

                            <Items isLight={lightMode}>

                                <Compilation>
                                    <div style={{height: "auto", width: 80 + "%", display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'column'}}>
                                        <div style={{paddingBottom: 1.5 + "rem"}}>
                                            <CompilationSpan isLight={lightMode}>Collège Hubert</CompilationSpan>
                                        </div>
                                        <div style={{width: 100 + "%"}}>
                                            <div style={{height: 100 + "%", width: 100 + "%", display: 'flex', justifyContent: 'space-between'}}>
                                                <CompilationName isLight={lightMode}>&nbsp;Delisle</CompilationName>
                                                <CompilationYear isLight={lightMode}>2018 - 2021</CompilationYear>
                                            </div>
                                        </div>
                                    </div>
                                </Compilation>

                                <CompilationLine isLight={lightMode} className="line3"></CompilationLine>

                                <div style={{height: 100 + "%", width: 60 + "%", display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', paddingTop: 5 + "rem"}}>
                                    <div style={{height: 100 + "%", width: 87 + "%", display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start',flexDirection: 'column'}}>
                                        <Degree isLight={lightMode}>BREVET</Degree>

                                        <div style={{height: 100 + "%", width: 100 + "%", paddingTop: 20 + "px"}}>
                                            <Paragraph isLight={lightMode}>
                                                Diplôme national du brevet, Collège Hubert Delisle,
                                                Saint-Benoît, La Réunion 
                                            </Paragraph>
                                        </div>
                                    </div>
                                    
                                </div>

                            </Items>

                        </div>
                    </div>
                </div>
            </div>
        </EducationContainerRight>

    </EducationContainer>
  )
}

export default education
