import React from 'react'
import styled from 'styled-components';
import {primaryColor, secondColor, morgenWalsh, primaryLightColor, Number, EmSpace, OldchildContent, Title, ContainerTitle} from './Common';

const MenuContainer = styled.section`
  height: 100%;
  width: calc(100% - 100px);
  position: fixed;
  right: 0;
  background: ${props => props.isLight === true ? primaryLightColor : primaryColor};
  opacity: ${props => props.isActive === true ? 1 : 0};
  z-index: ${props => props.isActive === true ? 1 : -1};
  transition: all .2s ease-in;
  @media (min-width: 1400px) {
    width: calc(100% - 150px);
  }
  @media (max-width: 850px){
    width: 100%;
    margin-top: 100px;
  }
  @media (max-width: 450px){
    margin-top: 80px;
  }
`

/* const Content = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1300px){
    width: 100%;
  }
`
const Navigation = styled.ul`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
`
const NavLinks = styled.li`
  height: auto;
  width: auto;
  padding-bottom: 2rem;
  display: inline-flex;
  align-items: flex-end;
`
const Underline = styled.li`
  width: 25rem;
  height: 4px;
  background-color: ${thirdColor};
  position: relative;
  bottom: 2.2rem;
`
const Link = styled.a`
  height: auto;
  width: auto;
  font-family: ${morgenWalsh};
  font-size: max(14.4rem, 20px);
  color: ${secondColor};
  padding-left: 8rem;
`
const Roman = styled.span`
  font-family: ${ancient};
  font-size: max(6.4rem, 15px);
  color: ${secondColor};
  position: relative;
  bottom: 1rem;
  padding-right: 5rem;
  min-width: 90px;
` */
const Copyright = styled.p`
  height: auto;
  width: auto;
  color: ${secondColor};
  font-size: max(1.4rem, 10px);
  font-family: ${morgenWalsh};
`
const PaddingCopy = styled.div`
  height: 100%;
  width: 100%;
  color: ${secondColor};
  font-size: max(1.4rem, 10px);
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 5rem;
`

function Menu({openMenu, setOpenMenu, lightMode, setlightMode}) {
  return (
    <MenuContainer isLight={lightMode} isActive={openMenu}>

      <div style={{height: 90 + "%", width: 100 + "%", display: 'flex', justifyContent: 'flex-end'}}>

        <ContainerTitle>

          <div style={{height: 'auto', width: 100 + "%"}}>
              <div style={{height: 100 + "%", width: 100 + "%"}}>
                  <OldchildContent>
                      <EmSpace></EmSpace>
                      <Number className="oldchild0">00</Number>
                  </OldchildContent>
                  
              </div>
          </div>

          <div style={{height: 'auto', width: 100 + "%", paddingTop: 3 + "rem"}}>
              <div style={{height: 100 + "%", width: 100 + "%"}}>
                  <Title>Menu</Title>
              </div>
          </div>

        </ContainerTitle>

        {/* <Content>
          <Navigation>

            <NavLinks>
              <Roman>1</Roman>
              <Underline></Underline>
              <Link href='#'>Home</Link>
            </NavLinks>

            <NavLinks>
              <Roman>2</Roman>
              <Underline></Underline>
              <Link href='#'>Work</Link>
            </NavLinks>
            
            <NavLinks>
              <Roman>3</Roman>
              <Underline></Underline>
              <Link href='#'>About</Link>
            </NavLinks>

            <NavLinks>
              <Roman>14</Roman>
              <Underline></Underline>
              <Link href='#'>Contact</Link>
            </NavLinks>

          </Navigation>
        </Content> */}

      </div>

      <div style={{height: 10 + "%", width: 100 + "%",}}>
        <PaddingCopy>
          <Copyright>Designed and made by Vittorio</Copyright>
          <Copyright>2022 - All Rights Reserverd © </Copyright>
        </PaddingCopy>
      </div>

    </MenuContainer>
  )
}

export default Menu