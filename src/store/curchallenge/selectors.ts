import { StoreState } from "../types"

export const selectCurChallenge = (state: StoreState): WordMeaningPair => {
  return state.curchallenge
}
