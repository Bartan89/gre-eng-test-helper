import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./App.css"
import greDictionairy from "./data/gre.json"
import { setChallenges } from "./store/challenges/actions"
import { setCurChallenge } from "./store/curchallenge/actions"
import { selectCurChallenge, selectCurChallengeLength } from "./store/curchallenge/selectors"
import styled from "styled-components"
import Button from "./styledComponents/button"
import Word from "./styledComponents/Word"
import Container from "./styledComponents/Container"
import Meaning from "./styledComponents/Meaning"

function App() {
  const WordMeaningPair = useSelector(selectCurChallenge)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setChallenges(greDictionairy))
  }, [])

  const [animate, setAnimate] = useState(true)
  function handleClick() {
    dispatch(setCurChallenge())
    setShowAnswer(false)
    setAnimate(!animate)
  }

  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    if (animate === false) {
      setAnimate(!animate)
    }
  }, [animate])

  const answer = showAnswer ? <Meaning>{WordMeaningPair.meaning}</Meaning> : <Meaning></Meaning>
  function handleCheckAnswerClick() {
    setShowAnswer(!showAnswer)
  }

  const steps = useSelector(selectCurChallengeLength)

  console.log(steps)

  return (
    <div>
      <Container>
        {animate ? <Word steps={steps}>{WordMeaningPair.word}</Word> : <Word> </Word>}

        {answer}

        <Button primary onClick={handleClick}>
          Next word
        </Button>
        <Button onClick={handleCheckAnswerClick}>Check answer</Button>
      </Container>
    </div>
  )
}

export default App
