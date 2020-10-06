import styled from "styled-components"

export default styled.div`
  :nth-last-child(2) {
    grid-column: 3/4;
  }
  :last-child {
    grid-column: 1/4;
    grid-row: 2/3;
  }
`
