export const SET_CHALLENGES = "SET_CHALLENGES"
export const STORE_WORD_IN_LOCAL_STORAGE = "STORE_WORD_IN_LOCAL_STORAGE"

type SetChallenges = {
  type: typeof SET_CHALLENGES
  challengesWithoutKnowns: WordMeaningPair[]
}
type StoreWordInLocalStorage = {
  type: typeof STORE_WORD_IN_LOCAL_STORAGE
  word: string
}

export type challengesTypes = SetChallenges | StoreWordInLocalStorage
