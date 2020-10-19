import styled from "styled-components"

type Test = {
  primary?: boolean
}

export default styled.button<Test>`
  background: transparent;

  height: 2em;

  color: white;
  position: relative;
  margin-bottom: 2px;
  

  padding: 4px;
  font-size: calc(12px + 6 * ((100vw - 320px) / 680));

  margin: 4px;
  border: solid 3px white;

  :focus {
    outline-color: transparent;
  }

  :hover {
    background: white;
    color: black;
  }

  :active {
    top: 0.1em;
  }
`
