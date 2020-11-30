import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./App.css"
import ButtonsBottomPage from "./components/ButtonsBottomPage"
import ModalDictionary from "./components/ModalDictionary"
import greDictionairy from "./data/gre-sorted-cleaned.json"
import { setChallenges } from "./store/challenges/actions"
import {
  selectChallengesDone,
  selectChallengesLeft,
  selectCurChallengeLength,
  slctCurChallenge,
  slctIfChallgeHasnStarted
} from "./store/curchallenge/selectors"
import { slctShowDictionary } from "./store/uistate/selectors"
import Test from "./styledComponents/ Test"
import Container from "./styledComponents/Container"
import Heading from "./styledComponents/Heading"
import Meaning from "./styledComponents/Meaning"
import ProgressBar from "./styledComponents/ProgressBar"
import Subcontainer from "./styledComponents/Subcontainer"
import Word from "./styledComponents/Word"
import Button from "./styledComponents/button"

function App() {
  const curWordMeaning = useSelector(slctCurChallenge)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setChallenges(greDictionairy))
  }, [])

  const [animate, setAnimate] = useState(true)

  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    if (animate === false) {
      setAnimate(!animate)
    }
  }, [animate])

  const answer = showAnswer ? <Meaning>{curWordMeaning.meaning}</Meaning> : <Meaning></Meaning>
  function handleCheckAnswerClick() {
    setShowAnswer(!showAnswer)
  }

  const steps = useSelector(selectCurChallengeLength)

  const wordsLeft = useSelector(selectChallengesLeft)

  const wordsKnown = useSelector(selectChallengesDone)

  const dictionary = useSelector(slctShowDictionary)

  useEffect(() => {
    console.log(dictionary)
  }, [dictionary])

  const percentageToSend = 100 - (wordsLeft / 729) * 100

  const [showProgress, setshowProgress] = useState(false)

  useEffect(() => {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) != -1) {
      setshowProgress(true)
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
      setshowProgress(true)
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
      setshowProgress(false)
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
      setshowProgress(true)
    } else if (navigator.userAgent.indexOf("MSIE") != -1 || !!document.DOCUMENT_NODE == true) {
      //IF IE > 10
      setshowProgress(true)
    } else {
      setshowProgress(true)
    }
  }, [])

  const onNoChallenge = useSelector(slctIfChallgeHasnStarted)



  return (
    <div>
      <ModalDictionary />
      <div>
        <Heading>GRE helper for students</Heading>
        <Container>
          <Subcontainer>
            {onNoChallenge ? "" : <p style={{ overflow: "scroll" }}>To get started press <Button>Next</Button>.  If you know a word press <Button>Got it</Button> will be taken out of the list and you won't see it again. For Dictionairy <Button>Dictionairy</Button>. Don't know a word? press: <Button>Meaning</Button></p>}

            {animate ? <Word steps={steps}>{curWordMeaning.word}</Word> : <Word></Word>}
            {curWordMeaning.meaning}
          </Subcontainer>

          <Subcontainer>
            <Test />


            {showProgress ? (
              <ProgressBar percentage={percentageToSend}>
                <span></span>
              </ProgressBar>
            ) : (
                ""
              )}
            <span>{(100 - (wordsLeft / 729) * 100).toFixed(2)}%</span>
            <p> words left to learn: {wordsLeft} </p>
          </Subcontainer>
          <ButtonsBottomPage />
          <small style={{ paddingTop: "2px", fontSize: "12px" }}>
            Bart Kuijper 2020 - not for commercial use
          </small>
        </Container>
      </div>
    </div>
  )
}

export default App
