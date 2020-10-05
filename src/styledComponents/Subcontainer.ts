import styled from "styled-components"

export default styled.div`
  background-color: #577c9c;
  padding: 20px;
  color: whitesmoke;
  p {
    color: #2c3e4e;
  }
  span {
    color: #2c3e4e;
  }
  :first-of-type {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  :last-of-type {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`
