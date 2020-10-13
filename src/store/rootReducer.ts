import { combineReducers } from "redux"
import curchallenge from "./curchallenge/reducer"
import challenges from "./challenges/reducer"
import uistate from "./uistate/reducer"
import emojiparticles from "./emojiparticles/reducer"

export default combineReducers({
  curchallenge,
  challenges,
  uistate,
  emojiparticles
})
