import styled from "styled-components"

type PropsDisplay = {
  active: boolean
}

export default styled.div`
  z-index: 2;
  position: absolute;

  display: ${(props: PropsDisplay) => (props.active ? "grid" : "none")};

  width: calc(100% - 5px);

  grid-template-columns: 50px 300px 1fr;
  grid-template-rows: 36em calc(100vh - 40em);
  justify-content: center;
  grid-gap: 0px;
  margin: 0px !important;
  padding: 0px !important;
`
