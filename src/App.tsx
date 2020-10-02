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

  function storeInLocalState(word: string) {
    dispatch(stageLocalStorageOfKnownWord(word))
  }

  const wordsLeft = useSelector(selectChallengesLeft)
  const wordsKnown = useSelector(selectChallengesDone)
  return (
    <div>
      <Container>
        {animate ? <Word steps={steps}>{WordMeaningPair.word}</Word> : <Word> </Word>}
        {answer}
        <ProgressBar percentage={100 - (wordsLeft / 729) * 100}>
          <span></span>
        </ProgressBar>
        <span>{(100 - (wordsLeft / 729) * 100).toFixed(2)}%</span>
        <p> words left to learn: : {wordsLeft} </p>

        <Button onClick={() => storeInLocalState(WordMeaningPair.word)}>I know this word</Button>
        <Button primary onClick={handleClick}>
          Next word
        </Button>
        <Button onClick={handleCheckAnswerClick}>Check answer</Button>
      </Container>
    </div>
  )
}

export default App
