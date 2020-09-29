export const SET_CHALLENGES = "SET_CHALLENGES"

type SetChallenges = {
  type: typeof SET_CHALLENGES
  challenges: WordMeaningPair[]
}

export type challengesTypes = SetChallenges
