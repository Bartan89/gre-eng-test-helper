import { challengeTypes, SET_CUR_CHALLENGE, USER_WANTS_MEANING } from "./types"

const initialState: WordMeaningPair = {
  word: "",
  meaning: ""
}

export default (state = initialState, action: challengeTypes) => {
  switch (action.type) {
    case SET_CUR_CHALLENGE:
      console.log("hello? being hit??")
      return { ...state, word: action.curChallenge.word, meaning: "" }
    case USER_WANTS_MEANING:
      return { ...state, meaning: action.meaning }

    default:
      return state
  }
}
