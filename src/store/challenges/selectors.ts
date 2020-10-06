import { StoreState } from "../types"

export const selectAllChallenges = (state: StoreState) => {
  return state.challenges
}
