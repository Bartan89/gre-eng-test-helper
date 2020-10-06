import styled from "styled-components"

export default styled.div`
  overflow: scroll;
  margin: 0px;
  padding: 0px;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
  text-align: center;

  :first-child {
    grid-column: 1/2;
  }
  :nth-child(2) {
    grid-column: 2/3;
  }
`
