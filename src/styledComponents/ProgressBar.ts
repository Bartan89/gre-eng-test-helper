import styled from "styled-components"

export default styled.div`
  height: 10px; /* Can be anything */

  position: relative;
  background: #555;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  padding: 5px;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
  background: #2c3e4e;
  span {
    color: white;
    font-size: 9px;
    display: block;
    height: 100%;
    color: #2c3e4f;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: rgb(43, 194, 83);
    background-image: linear-gradient(center bottom, rgb(43, 194, 83) 37%, rgb(84, 240, 84) 69%);
    box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3), inset 0 -2px 6px rgba(0, 0, 0, 0.4);
    position: relative;

    color: ${(props: Props) => `${console.log("hello from props", props.percentage)}`};

    animation: fill 4ms ease-in forwards;

    @keyframes fill {
      0% {
        width: 0%;
      }

      100% {
        width: ${(props: Props) => `${props.percentage}%`};
      }
    }
  }
`
type Props = {
  percentage: number
}
