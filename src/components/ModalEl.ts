import styled from "styled-components"

type PropsDisplay = {
  show: boolean | null
}

function show(status: boolean | null) {
  if (status === true) {
    return `animation: comein 1s ease forwards;`
  } else if (status === false) {
    return `animation: comeout 1s ease-out forwards;`
  } else if (status === null) {
    return ""
  }
}

export default styled.div`
  z-index: 9000;
  position: absolute;

  width: calc(100% - 5px);
  display: grid;
  grid-template-columns: 50px 300px 1fr;
  grid-template-rows: 36em calc(100vh - 40em);
  justify-content: center;
  grid-gap: 0px;
  top: 0px;
  left: calc(-100% - 5px);

  ${(props: PropsDisplay) => show(props.show)};

  @keyframes comein {
    0% {
      left: calc(-100% - 5px);
    }

    100% {
      left: 0px;
    }
  }

  @keyframes comeout {
    0% {
      left: 0px;
    }

    100% {
      left: calc(-100% - 5px);
    }
  }
`
