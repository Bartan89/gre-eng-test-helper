import styled from "styled-components"

type Props = {
  percentage: number
}

export default styled.div`
  position: relative;
  animation: emit 3.5s ease-out forwards;
  height: 40px;
  padding: 10px;
  bottom: 0px;
  left: ${(props: Props) => `${props.percentage * 5}px`};
  @keyframes emit {
    0% {
      font-size: 0px;
      bottom: -50px;
      opacity: 1;
    }
    10% {
      font-size: 25px;
      bottom: -22px;
    }
    30% {
      opacity: 1;
    }
    100% {
      font-size: 25px;
      bottom: 200px;
      opacity: 0;
    }
  }
`
