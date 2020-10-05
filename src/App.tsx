import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./App.css"
import greDictionairy from "./data/gre.json"
import { setChallenges, stageLocalStorageOfKnownWord } from "./store/challenges/actions"
import { setCurChallenge } from "./store/curchallenge/actions"
import { selectChallengesDone, selectChallengesLeft, selectCurChallenge, selectCurChallengeLength } from "./store/curchallenge/selectors"
import styled from "styled-components"
import Button from "./styledComponents/button"
import Word from "./styledComponents/Word"
import Container from "./styledComponents/Container"
import Meaning from "./styledComponents/Meaning"
import ProgressBar from "./styledComponents/ProgressBar"
import EmjoiEmiter from "./styledComponents/EmjoiEmiter"
import Subcontainer from "./styledComponents/Subcontainer"
import Heading from "./styledComponents/Heading"

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

    if (emiter === true) {
      setEmiter(false)
    }
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

  const [emiter, setEmiter] = useState(false)

  function storeInLocalState(word: string) {
    dispatch(stageLocalStorageOfKnownWord(word))
  }

  const wordsLeft = useSelector(selectChallengesLeft)

  useEffect(() => {
    setEmiter(!emiter)
  }, [wordsLeft])

  const wordsKnown = useSelector(selectChallengesDone)
  return (
    <div>
      <Heading>GRE test helper</Heading>
      <Container>
        <Subcontainer>
          {animate ? <Word steps={steps}>{WordMeaningPair.word}</Word> : <Word> </Word>}
          {answer}
        </Subcontainer>
        <Subcontainer>
          <div>{emiter ? <EmjoiEmiter percentage={100 - (wordsLeft / 729) * 100}>👍</EmjoiEmiter> : <div style={{ position: "relative", padding: "10px", height: "40px" }}> </div>}</div>
          <ProgressBar percentage={100 - (wordsLeft / 729) * 100}>
            <span></span>
          </ProgressBar>
          <span>{(100 - (wordsLeft / 729) * 100).toFixed(2)}%</span>
          <p> words left to learn: {wordsLeft} </p>
        </Subcontainer>
        <Subcontainer>
          <Button onClick={() => storeInLocalState(WordMeaningPair.word)}>I know this word</Button>
          <Button primary onClick={handleClick}>
            Next word
          </Button>
          <Button onClick={handleCheckAnswerClick}>Check answer</Button>
        </Subcontainer>
        <small style={{ paddingTop: "2px", fontSize: "12px" }}>Bart Kuijper 2020 - not for commercial use</small>
      </Container>
    </div>
  )
}

export default App
