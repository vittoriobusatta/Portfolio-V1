import React from 'react'
import styled from 'styled-components';
import {primaryColor,primaryLightColor, secondColor, thirdColor} from '../Common';


const Button = styled.button`
  position: fixed;
  bottom: 3%;
  right: 3%;
  height: 40px;
  width: 40px;
  z-index: 100;
  border: none;
  border-radius: 25%;
  background: none;
`

const Moon = styled.svg`
  & path {
    fill: ${props => props.isLight === true ?  primaryColor : primaryLightColor };
  }
`

function Darkbtn({lightMode, setlightMode}) {

  const ClickBtn = () => {
    setlightMode(!lightMode)
  }

  return (
    <Button 
    onClick={ClickBtn}
    isLight={lightMode} >
      <Moon isLight={lightMode} width="501" height="501" viewBox="0 0 501 501" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M500.403 275.034C493.961 338.304 463.727 396.764 415.817 438.584C367.907 480.408 305.897 502.475 242.337 500.318C178.778 498.161 118.407 471.943 73.4468 426.966C28.4818 381.986 2.28277 321.606 0.14177 258.046C-1.99493 194.484 20.0868 132.486 61.9268 84.5856C103.767 36.6906 162.237 6.47261 225.507 0.0506059C229.382 -0.379084 233.026 1.96471 234.241 5.66781C235.456 9.37091 233.905 13.4178 230.53 15.367C198.046 34.734 172.249 63.555 156.589 97.976C140.929 132.402 136.151 170.785 142.894 207.996C149.64 245.207 167.585 279.473 194.332 306.211C221.078 332.949 255.352 350.883 292.566 357.613C329.781 364.347 368.164 359.558 402.586 343.886C437.004 328.214 465.816 302.406 485.172 269.917C487.164 266.644 491.149 265.179 494.786 266.378C498.422 267.577 500.75 271.124 500.407 274.94L500.403 275.034Z" fill="black"/>
      </Moon>
    </Button>
  )
}

export default Darkbtn