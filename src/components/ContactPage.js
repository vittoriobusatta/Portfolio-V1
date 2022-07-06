import React from 'react'
import styled from 'styled-components';
import {secondColor, thirdLightColor, primaryColor, primaryLightColor, EmSpace, OldchildContent, Title, Number, ContainerTitle, roboto, fourthLightColor} from './Common';


const ContactContainer = styled.section`
  height: 100vh;
  width: calc(100% - 100px);
  background-color: ${props => props.isLight === true ? primaryLightColor : primaryColor};
  position: relative;

  @media (min-width: 1400px) {
    width: calc(100% - 150px);
  }

  @media (max-width: 850px) {
    width: 100%;
  }
`

function ContactPage(lightMode) {
  return (
    <ContactContainer>
      <ContainerTitle>

        <div style={{height: 'auto', width: 100 + "%"}}>
            <div style={{height: 100 + "%", width: 100 + "%"}}>
              <OldchildContent>
                  <EmSpace isLight={lightMode}></EmSpace>
                  <Number isLight={lightMode} className="oldchild5">05</Number>
              </OldchildContent>
            </div>
        </div>

        <div style={{height: 'auto', width: 100 + "%", paddingTop: 3 + "rem"}}>
            <div style={{height: 100 + "%", width: 100 + "%"}}>
                <Title isLight={lightMode}>Contact</Title>
            </div>
        </div>

      </ContainerTitle>
    </ContactContainer>
  )
}

export default ContactPage