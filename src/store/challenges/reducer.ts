// import { Video } from "../../global";
// import {
//   myVideoActionTypes,
//   STORE_CURTIME,
//   STORE_TOTALTIME,
//   STORE_CURVIDEO,
// } from "./types";

import { challengesTypes, SET_CHALLENGES, STORE_WORD_IN_LOCAL_STORAGE } from "./types"

const initialState: WordMeaningPair[] = []

export default (state = initialState, action: challengesTypes) => {
  switch (action.type) {
    case SET_CHALLENGES:
      console.log("hello")
      return [...state, ...action.challengesWithoutKnowns]

    case STORE_WORD_IN_LOCAL_STORAGE:
      localStorage.setItem(`${action.word}`, `${action.word}`)

    default:
      return state
  }
}
