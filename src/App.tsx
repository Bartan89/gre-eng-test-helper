import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./App.css"
import Modal from "./components/ModalEl"
import greDictionairy from "./data/gre-sorted-cleaned.json"
import { setChallenges, stageLocalStorageOfKnownWord } from "./store/challenges/actions"
import { selectAllChallenges } from "./store/challenges/selectors"
import { setCurChallenge } from "./store/curchallenge/actions"
import { selectChallengesDone, selectChallengesLeft, selectCurChallenge, selectCurChallengeLength } from "./store/curchallenge/selectors"
import AbcButton from "./styledComponents/AbcButton"
import Button from "./styledComponents/button"
import Container from "./styledComponents/Container"
import EmjoiEmiter from "./styledComponents/EmjoiEmiter"
import Heading from "./styledComponents/Heading"
import Meaning from "./styledComponents/Meaning"
import ModalOutside from "./styledComponents/ModalOutside"
import ModalSubSection from "./styledComponents/ModalSubSection"
import ProgressBar from "./styledComponents/ProgressBar"
import Subcontainer from "./styledComponents/Subcontainer"
import Word from "./styledComponents/Word"

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

  const [dictionary, setdictionary] = useState<boolean | null>(null)
  useEffect(() => {
    console.log(dictionary)
  }, [dictionary])

  const allChallenges = useSelector(selectAllChallenges)

  const abc = Array.from(new Set(allChallenges.map((challenge) => challenge.word.substring(0, 1)).flat()))

  const [dictionaryOnLetter, setdictionaryOnLetter] = useState<WordMeaningPair[]>()

  function handleFilterOnLetter(letter: string) {
    const result = allChallenges.filter((challenge) => {
      return challenge.word[0] === letter
    })
    setdictionaryOnLetter(result)
  }

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

  return (
    <div>
      <Modal show={dictionary}>
        <ModalSubSection>
          {abc.map((letter) => {
            return (
              <div>
                <AbcButton style={{ width: "2em" }} onClick={() => handleFilterOnLetter(letter)}>
                  <small>{letter}</small>
                </AbcButton>
              </div>
            )
          })}
        </ModalSubSection>
        <ModalSubSection>
          {dictionaryOnLetter?.map((challenge) => {
            return (
              <div>
                <p>{challenge.word}</p>
                <small>{challenge.meaning}</small>
              </div>
            )
          })}
        </ModalSubSection>
        <ModalOutside onClick={() => setdictionary(dictionary === null ? true : !dictionary)}></ModalOutside>
      </Modal>
      <div>
        <Heading>GRE test helper</Heading>
        <Container>
          <Subcontainer>
            {animate ? <Word steps={steps}>{WordMeaningPair.word}</Word> : <Word></Word>}
            {answer}
          </Subcontainer>

          <Subcontainer>
            <div>{emiter ? <EmjoiEmiter percentage={100 - (wordsLeft / 729) * 100}>👍</EmjoiEmiter> : <div style={{ position: "relative", padding: "10px", height: "40px" }}> </div>}</div>
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
          <Subcontainer>
            <Button onClick={() => storeInLocalState(WordMeaningPair.word)}>Got it</Button>
            <Button primary onClick={handleClick}>
              Next
            </Button>
            <Button primary onClick={() => setdictionary(dictionary === null ? true : !dictionary)}>
              Dictionary
            </Button>
            <Button onClick={handleCheckAnswerClick}>Meaning</Button>
            <small style={{ display: "block", fontSize: "12px" }}>check the meaning of the word</small>
          </Subcontainer>
          <small style={{ paddingTop: "2px", fontSize: "12px" }}>Bart Kuijper 2020 - not for commercial use</small>
        </Container>
      </div>
    </div>
  )
}

export default App
