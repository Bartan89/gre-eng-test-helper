import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./App.css"
import greDictionairy from "./data/gre.json"
import { setChallenges } from "./store/challenges/actions"
import { setCurChallenge } from "./store/curchallenge/actions"
import { selectCurChallenge } from "./store/curchallenge/selectors"

function App() {
  const WordMeaningPair = useSelector(selectCurChallenge)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setChallenges(greDictionairy))
  }, [])

  function handleClick() {
    dispatch(setCurChallenge())
    setShowAnswer(false)
  }

  const [showAnswer, setShowAnswer] = useState(false)

  const answer = showAnswer ? <p>{WordMeaningPair.meaning}</p> : ""

  return (
    <div style={{ padding: "10px", boxShadow: "0px 3px 15px rgba(0,0,0,0.2)", position: "relative", margin: "auto", width: "300px", height: "200px" }}>
      <p>{WordMeaningPair.word}</p>
      {answer}
      <div style={{ position: "absolute", left: "75px", bottom: "10px" }}>
        <button onClick={handleClick}>Next word</button>
        <button onClick={() => setShowAnswer(!answer)}>Check answer</button>
      </div>
    </div>
  )
}

export default App
