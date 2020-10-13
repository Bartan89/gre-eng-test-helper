export type StoreState = {
  challenges: WordMeaningPair[]
  curchallenge: WordMeaningPair
  uistate: UiElements
  emojiparticles: emojiAnimation[]
}

export type GetState = () => StoreState
