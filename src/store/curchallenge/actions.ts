import { Dispatch } from "redux"
import { GetState } from "../types"
import { SET_CUR_CHALLENGE, USER_WANTS_MEANING } from "./types"

export function setCurChallenge() {
  return (dispatch: Dispatch, GetState: GetState) => {
    const challenges = GetState().challenges.filter((challenge) => {
      if (challenge.word === localStorage.getItem(challenge.word)) {
        return null
      } else {
        return challenge
      }
    })

    const randomnr = Math.floor(Math.random() * challenges.length)

    const curChallenge = {
      word: challenges[randomnr].word
    }

    console.log("hello here then?")

    dispatch(dispatchSetChallenge(curChallenge))
  }
}

export function usrWantsMeaning() {
  return (dispatch: Dispatch, getState: GetState) => {
    console.log("am I being hit action???")
    const curword = getState().curchallenge.word

    const challenge = getState().challenges.find((challenge: WordMeaningPair) => {
      if (challenge.word === curword) {
        return challenge
      }
    })

    const meaning = challenge?.meaning

    console.log("hello from action!!!", meaning)

    dispatch({
      type: USER_WANTS_MEANING,
      meaning
    })
  }
}

function dispatchSetChallenge(curChallenge: WordMeaningPair) {
  return {
    type: SET_CUR_CHALLENGE,
    curChallenge
  }
}
