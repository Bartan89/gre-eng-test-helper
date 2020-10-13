import { EMOJIS_LANDED, EMOJIS_START_FLIGHT, UiState, USER_WANTS_DICTIONARY } from "./types"

const initialState: UiElements = {
  showDictionary: null,
  emojiFlying : false
}

export default (state = initialState, action: UiState) => {
  switch (action.type) {
    case USER_WANTS_DICTIONARY:
      const toUpdate = state.showDictionary === null ? true : !state.showDictionary
      return { ...state, showDictionary: toUpdate }
    default:

    case EMOJIS_START_FLIGHT:
      return { ...state, emojiFlying: true }
    
      case EMOJIS_LANDED:
        return {...state, emojiFlying : false}

      
      return state
  }
}
