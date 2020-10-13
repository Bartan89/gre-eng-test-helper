import React, { useState } from "react"
import Subcontainer from "../styledComponents/Subcontainer"
import Button from "../styledComponents/button"
import { useDispatch, useSelector } from "react-redux"
import { usrKnownWord } from "../store/challenges/actions"
import { setCurChallenge, usrWantsMeaning } from "../store/curchallenge/actions"
import { slctCurChallenge } from "../store/curchallenge/selectors"
import { usrWantsDictionary } from "../store/uistate/actions"
import { cleanEmojiBuildUp, stageClick } from "../store/emojiparticles/actions"
import { slctEmojisFlying } from "../store/uistate/selectors"





export default function ButtonsBottomPage() {



  const [disable, setdisable] = useState(false)

  const dispatch = useDispatch()
  const curWordMeaning = useSelector(slctCurChallenge)

  const hndlGotIt = (word: string) => {
    dispatch(stageClick)
    dispatch(usrKnownWord(word))
    setdisable(!disable)
  }


  function hndlNext() {
    dispatch(setCurChallenge())
    setdisable(!disable)
  }

  return (
    <Subcontainer>
      <Button disabled={disable} onClick={() => hndlGotIt(curWordMeaning.word)}>Got it</Button>
      <Button  primary onClick={hndlNext}>
        Next
      </Button>
      <Button primary onClick={() => dispatch(usrWantsDictionary())}>
        Dictionary
      </Button>
      <Button onClick={() => dispatch(usrWantsMeaning())}>Meaning</Button>
    </Subcontainer>
  )
}
