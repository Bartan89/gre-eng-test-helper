import styled from "styled-components"

export default styled.button`
  :hover {
    height: 25px;
    animation: dictionairygrow 1ms ease forwards;
    @keyframes dictionairygrow {
      0% {
        height: 20px;
      }
      100% {
        height: 25px;
      }
    }
  }
`
