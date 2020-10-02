import styled from "styled-components"

type Test = {
  steps?: number
  none?: boolean
}

export default styled.h2<Test>`
  color: black;
  font-family: monospace;

  white-space: nowrap;
  overflow: hidden;
  margin: auto;
  height: 44px;
  font-size: 40px;

  width: ${(props: Test) => `${props.steps}ch`};

  animation: sampleanimation 0.5s ${(props: Test) => `steps(${props.steps})`};

  @keyframes sampleanimation {
    0% {
      width: 0ch;
      border-right: 4px solid black;
    }
    99% {
      border-right: 4px solid black;
    }
    100% {
      width: ${(props: Test) => `(${props.steps}ch)`};
      border-right: 0px solid black;
    }
  }
`
