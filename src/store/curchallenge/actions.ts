import { Dispatch } from "redux"
import { GetState } from "../types"
import { SET_CUR_CHALLENGE } from "./types"

export function setCurChallenge() {
  return (dispatch: Dispatch, GetState: GetState) => {
    const challenges = GetState().challenges

    const randomnr = Math.floor(Math.random() * challenges.length)

    const curChallenge = {
      word: challenges[randomnr].word,
      meaning: challenges[randomnr].meaning
    }

    console.log("hello here then?")

    dispatch(dispatchSetChallenge(curChallenge))
  }
}

function dispatchSetChallenge(curChallenge: WordMeaningPair) {
  return {
    type: SET_CUR_CHALLENGE,
    curChallenge
  }
}
