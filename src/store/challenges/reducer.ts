// import { Video } from "../../global";
// import {
//   myVideoActionTypes,
//   STORE_CURTIME,
//   STORE_TOTALTIME,
//   STORE_CURVIDEO,
// } from "./types";

import { challengesTypes, SET_CHALLENGES } from "./types"

const initialState: WordMeaningPair[] = []

export default (state = initialState, action: challengesTypes) => {
  switch (action.type) {
    case SET_CHALLENGES:
      console.log("hello")
      return [...state, ...action.challenges]

    default:
      return state
  }
}
