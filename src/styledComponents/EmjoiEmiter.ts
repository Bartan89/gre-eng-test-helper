import styled from "styled-components"

type Props = {
  percentage: number
  deviation: number
}

export default styled.div`
  text-align: left;
  position: absolute;

  animation: emit 3.5s ease-out forwards;

  height: 40px;
  padding: 10px;
  bottom: 0px;

  left: ${(props: Props) => `${props.percentage}%`};
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
      bottom: ${(props: Props) => `${props.deviation}px`};
      opacity: 0;
    }
  }
`
