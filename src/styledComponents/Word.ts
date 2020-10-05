import styled from "styled-components"

type Test = {
  steps?: number
  none?: boolean
}

export default styled.h2<Test>`
  font-family: monospace;

  white-space: nowrap;
  overflow: hidden;
  margin: auto;

  width: ${(props: Test) => `${props.steps}ch`};

  animation: sampleanimation 0.5s ${(props: Test) => `steps(${props.steps})`};

  @keyframes sampleanimation {
    0% {
      width: 0ch;
      border-right: solid white;
    }
    99% {
      border-right: solid white;
    }
    100% {
      width: ${(props: Test) => `(${props.steps}ch)`};
      border-right: solid black;
    }
  }
`
