import { StoreState } from "../types"

export const selectCurChallenge = (state: StoreState): WordMeaningPair => {
  return state.curchallenge
}

export const selectCurChallengeLength = (state: StoreState): number => {
  return state.curchallenge.word.length
}

export const selectChallengesLeft = (state: StoreState) => {
  const filtered = state.challenges.filter((challenge) => {
    if (challenge.word === localStorage.getItem(challenge.word)) {
      return null
    } else {
      return challenge
    }
  })

  return filtered.length
}

export const selectChallengesDone = (state: StoreState) => {
  const filtered = state.challenges.filter((challenge) => {
    if (challenge.word === localStorage.getItem(challenge.word)) {
      return null
    } else {
      return challenge
    }
  })

  const allWords = state.challenges

  return filtered.length - allWords.length
}
