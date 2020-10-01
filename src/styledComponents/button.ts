import styled from "styled-components"

type Test = {
  primary?: boolean
}

export default styled.button<Test>`
  margin: auto;
  background: transparent;

  background-color: ${(props: Test) => (props.primary ? "#7EB6D7" : "grey")};
  border: 2px solid black;
  color: black;
  position: relative;
  margin-bottom: 2px;
  left: 50px;
  margin: 5px;

  :focus {
    outline-color: transparent;
    border: 2px solid black;
  }

  :active {
    top: 0.1em;
  }
`
