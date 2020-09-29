import { combineReducers } from "redux"
import curchallenge from "./curchallenge/reducer"
import challenges from "./challenges/reducer"

export default combineReducers({
  curchallenge,
  challenges
})
