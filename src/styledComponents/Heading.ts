import styled from "styled-components"
import styles from "styled-components"

export default styled.h1`
  font-size: 26px !important;
  /* This ribbon is based on a 16px font side and a 24px vertical rhythm. I've used em's to position each element for scalability. If you want to use a different font size you may have to play with the position of the ribbon elements */

  width: 50%;

  position: relative;
  background: #ff4f01;
  color: #1a2930;
  text-align: center;
  padding: 0.5em 1em; /* Adjust to suit */
  margin: 1.5em auto 1em; /* Based on 24px vertical rhythm. 48px bottom margin - normally 24 but the ribbon 'graphics' take up 24px themselves so we double it. */

  :before,
  :after {
    content: "";
    position: absolute;
    display: block;
    bottom: -0.5em;
    border: 1em solid #c70e11;
    z-index: -1;
  }
  :before {
    left: -2em;
    border-right-width: 1.5em;
    border-left-color: transparent;
  }
  :after {
    right: -2em;
    border-left-width: 1.5em;
    border-right-color: transparent;
  }
  -content:before,
  -content:after {
    content: "";
    position: absolute;
    display: block;
    border-style: solid;
    border-color: #804f7c transparent transparent transparent;
    bottom: -1em;
  }
  -content:before {
    left: 0;
    border-width: 1em 0 0 1em;
  }
  -content:after {
    right: 0;
    border-width: 1em 1em 0 0;
  }
`
