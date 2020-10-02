import { Dispatch } from "redux"
import { SET_CHALLENGES, STORE_WORD_IN_LOCAL_STORAGE } from "./types"

export const setChallenges = (challenges: WordMeaningPair[]) => {
  const challengesWithoutKnowns = challenges.filter((challenge) => {
    console.log("A", localStorage.getItem(challenge.word))
    console.log("B", challenge.word)
    if (challenge.word === localStorage.getItem(challenge.word)) {
      return null
    } else {
      return challenge
    }
  })

  return {
    type: SET_CHALLENGES,
    challengesWithoutKnowns
  }
}

export const stageLocalStorageOfKnownWord = (word: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: STORE_WORD_IN_LOCAL_STORAGE,
      word
    })
  }
}
