import { challengeTypes, SET_CUR_CHALLENGE } from "./types"

const initialState: WordMeaningPair = {
  word: "",
  meaning: ""
}

export default (state = initialState, action: challengeTypes) => {
  switch (action.type) {
    case SET_CUR_CHALLENGE:
      console.log("hello? being hit??")
      return { ...state, ...action.curChallenge }

    default:
      return state
  }
}
