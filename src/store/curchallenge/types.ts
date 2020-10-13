export const SET_CUR_CHALLENGE = "SET_CUR_CHALLENGE"
export const USER_WANTS_MEANING = "USER_WANTS_MEANING"

type SetCurChallenge = {
  type: typeof SET_CUR_CHALLENGE
  curChallenge: WordMeaningPair
}

type UserWantsMeaning = {
  type: typeof USER_WANTS_MEANING
  meaning: string
}

export type challengeTypes = SetCurChallenge | UserWantsMeaning
