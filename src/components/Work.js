import {React, useState} from 'react'
import styled from 'styled-components';
import { primaryColor, primaryLightColor, WorkLinks} from './Common';
import AbThumbnail from '../assets/img/ab-distribution.webp'
import MutezaThumbnail from '../assets/img/muteza.webp'
import OukhtyThumbnail from '../assets/img/oukhty.webp'
import FolioThumbnail from '../assets/img/folio.webp'
import FlowerThumbnail from '../assets/img/flower.webp'
import EasyBankThumbnail from '../assets/img/esaybank.webp'
import CoventicThumbnail from '../assets/img/coventic.webp'
import NetflixThumbnail from '../assets/img/netflix.webp'
import BlogrThumbnail from '../assets/img/blogr.webp'


const ContactContainer = styled.section`
  height: 100vh;
  width: calc(100% - 100px);
  background-color: ${props => props.isLight === true ? primaryLightColor : primaryColor};
  display: flex;
  overflow: hidden;

  @media (min-width: 1400px) {
    width: calc(100% - 120px);
  }

  @media (max-width: 850px) {
    display: none;
    position: absolute;
    width: 100%;
    height: calc(100vh - 100px);
    bottom: 0;
  }
`



const ContainerLeft = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 850px) {
    width: 100%;
    justify-content: flex-start;
  }
`
const ContainerRight = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 850px) {
    display: none;
  }
`

const Content = styled.div`
  position: relative;
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Ul = styled.ul`
  height: auto;
  width: auto;
  overflow-y: scroll;
  max-height: 750px;
  padding-right: 5rem;

  @media (max-width: 1100px) {
   max-height: 650px;
  }

  ::-webkit-scrollbar {
    cursor: pointer;
    border: none;
  }
`
const Li = styled.li`
  margin-bottom: 5rem;
  padding-left: 2rem;
  @media (max-width: 850px) {
    margin-bottom: 8rem;
  }
`


const Image = styled.img`
  position: absolute;
  height: auto;
  width: 90%;
  transition: all 0.2s ease-in;
  border-radius: 15px;
  opacity: ${props => props.isHover === true ? 1 : 0};
`



function Work(lightMode) {

  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);
  const [hover6, setHover6] = useState(false);
  const [hover7, setHover7] = useState(false);
  const [hover8, setHover8] = useState(false);
  const [hover9, setHover9] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  const onHover2 = () => {
    setHover2(!hover2);
  };
  const onHover3 = () => {
    setHover3(!hover3);
  };
  const onHover4 = () => {
    setHover4(!hover4);
  };
  const onHover5 = () => {
    setHover5(!hover5);
  };
  const onHover6 = () => {
    setHover6(!hover6);
  };
  const onHover7 = () => {
    setHover7(!hover7);
  };
  const onHover8 = () => {
    setHover8(!hover8);
  };
  const onHover9 = () => {
    setHover9(!hover9);
  };



  return (
    <ContactContainer>

      <ContainerLeft>

        <Ul>
          
        <Li onMouseEnter={onHover} onMouseLeave={onHover}>
            <WorkLinks href='#' >
              Oukhty Shop
            </WorkLinks>
          </Li>
          <Li onMouseEnter={onHover2} onMouseLeave={onHover2}>
            <WorkLinks href='https://www.ab-distribution.re' >
              Ab Distribution
            </WorkLinks>
          </Li>
          <Li onMouseEnter={onHover3} onMouseLeave={onHover3}>
            <WorkLinks href='https://www.tonibusatta.fr' >
              Porfolio V0
            </WorkLinks>
          </Li>
          <Li onMouseEnter={onHover4} onMouseLeave={onHover4}>
            <WorkLinks href='https://tonii0.github.io/Muteza/' >
              Muteza
            </WorkLinks>
          </Li>
          <Li onMouseEnter={onHover5} onMouseLeave={onHover5}>
            <WorkLinks href='https://flytzwoo.github.io/Aliyahmarinabfleurs/' >
              Flower Shop
            </WorkLinks>
          </Li>

          <Li onMouseEnter={onHover8} onMouseLeave={onHover8}>
            <WorkLinks href='https://tonii0.github.io/Netflix/' >
              Netflix
            </WorkLinks>
          </Li>
          <Li onMouseEnter={onHover6} onMouseLeave={onHover6}>
            <WorkLinks href='https://tonii0.github.io/EasyBank/' >
              Easy Bank
            </WorkLinks>
          </Li>
          <Li onMouseEnter={onHover7} onMouseLeave={onHover7}>
            <WorkLinks href='https://tonii0.github.io/Coventic/' >
              Coventic
            </WorkLinks>
          </Li>
          <Li onMouseEnter={onHover9} onMouseLeave={onHover9}>
            <WorkLinks href='https://tonii0.github.io/Blogr/' >
              Blogr
            </WorkLinks>
          </Li>
 
          
        </Ul>


      </ContainerLeft>

      <ContainerRight>

        <Content>

          <Image isHover={hover}
            src={OukhtyThumbnail}
          />
          <Image isHover={hover2}
            src={AbThumbnail}
          />
          <Image isHover={hover3}
            src={FolioThumbnail}
          />
          <Image isHover={hover4}
            src={MutezaThumbnail}
          />
          <Image isHover={hover5}
            src={FlowerThumbnail}
          />
          <Image isHover={hover6}
            src={EasyBankThumbnail}
          />
          <Image isHover={hover7}
            src={CoventicThumbnail}
          />
          <Image isHover={hover8}
            src={NetflixThumbnail}
          />
          <Image isHover={hover9}
            src={BlogrThumbnail}
          />

        </Content>

      </ContainerRight>

              
    </ContactContainer>
  )
}

export default Work
