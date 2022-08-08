import React from "react";
import styled, { keyframes } from "styled-components";
import { primaryColor, secondColor, thirdColor } from "./Common";

const Container = styled.section`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  background: ${primaryColor};
  pointer-events: none;
  overflow: hidden;
`;
const LoaderRotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;
const Circle = styled.section`
  bottom: 15%;
  left: calc(50% - 25px);
  width: 50px;
  height: 50px;
  border: 4px solid ${thirdColor};
  border-left: 4px solid ${secondColor};
  border-radius: 100px;
  animation: ${LoaderRotate} 1s linear infinite;
  transition: 0.4s;
  transition-delay: 0.2s;
  z-index: 10;
`;

function Loader() {
  return (
    <Container>
      <Circle />
    </Container>
  );
}

export default Loader;