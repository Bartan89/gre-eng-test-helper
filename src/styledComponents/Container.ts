import styled from "styled-components"

export default styled.div`
  @media (min-width: 0px) {
    display: grid;
    grid-template-rows: 100px 200px 100px;
    grid-template-columns: calc(100vw - 5px);
  }
  @media (min-width: 600px) {
    display: grid;
    grid-template-rows: 100px 200px 100px;
    grid-template-columns: 500px;
    justify-content: center;
  }
  @media (min-width: 800px) {
    display: grid;
    grid-template-rows: 200px 200px 100px;
    grid-template-columns: 700px;
    margin-top: 20px;
    justify-content: center;
  }
  margin: 0px;
  padding: 0px;
  background-color: whitesmoke;

  font-size: calc(16px + 6 * ((100vw - 320px) / 680));
`
