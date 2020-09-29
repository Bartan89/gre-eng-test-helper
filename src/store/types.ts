export type StoreState = {
  challenges: WordMeaningPair[]
  curchallenge: WordMeaningPair
}

export type GetState = () => StoreState
