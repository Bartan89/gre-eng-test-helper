import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Modal from "../components/ModalEl"
import { selectAllChallenges } from "../store/challenges/selectors"
import { usrWantsDictionary } from "../store/uistate/actions"
import { slctShowDictionary } from "../store/uistate/selectors"
import AbcButton from "../styledComponents/AbcButton"
import ModalOutside from "../styledComponents/ModalOutside"
import ModalSubSection from "../styledComponents/ModalSubSection"

export default function ModalDictionary() {
  const dispatch = useDispatch()
  const dictionary = useSelector(slctShowDictionary)

  const allChallenges = useSelector(selectAllChallenges)

  const abc = Array.from(new Set(allChallenges.map((challenge) => challenge.word.substring(0, 1)).flat()))

  const [dictionaryOnLetter, setdictionaryOnLetter] = useState<WordMeaningPair[]>()

  function handleFilterOnLetter(letter: string) {
    const result = allChallenges.filter((challenge) => {
      return challenge.word[0] === letter
    })
    setdictionaryOnLetter(result)
  }

  return (
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
        {dictionaryOnLetter?.map((challenge: WordMeaningPair) => {
          return (
            <div>
              <p>{challenge.word}</p>
              <small>{challenge.meaning}</small>
            </div>
          )
        })}
      </ModalSubSection>
      <ModalOutside onClick={() => dispatch(usrWantsDictionary())}></ModalOutside>
    </Modal>
  )
}
