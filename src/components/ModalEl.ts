import styled from "styled-components"

type PropsDisplay = {
  active: boolean
}

export default styled.div`
  z-index: 100000000;
  position: absolute;

  background-color: rgba(255, 255, 255, 0.8);

  display: ${(props: PropsDisplay) => (props.active ? "grid" : "none")};
  margin-top: 30px;
  grid-template-rows: 36em;
  grid-template-columns: 100px 500px;
  justify-content: center;
  grid-gap: 0px;
  margin: 0px;
  padding: 0px;
`
