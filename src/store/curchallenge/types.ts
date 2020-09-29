export const SET_CUR_CHALLENGE = "SET_CUR_CHALLENGE"

type SetCurChallenge = {
  type: typeof SET_CUR_CHALLENGE
  curChallenge: WordMeaningPair
}

export type challengeTypes = SetCurChallenge
