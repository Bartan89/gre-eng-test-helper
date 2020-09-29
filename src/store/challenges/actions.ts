import { Dispatch } from "redux"
import { SET_CHALLENGES } from "./types"

export const setChallenges = (challenges: WordMeaningPair[]) => {
  return {
    type: SET_CHALLENGES,
    challenges
  }
}
