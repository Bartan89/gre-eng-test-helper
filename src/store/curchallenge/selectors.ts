import { StoreState } from "../types"

export const selectCurChallenge = (state: StoreState): WordMeaningPair => {
  return state.curchallenge
}

export const selectCurChallengeLength = (state: StoreState): number => {
  return state.curchallenge.word.length
}
