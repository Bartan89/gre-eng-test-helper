import { Dispatch } from "redux"
import { USER_WANTS_DICTIONARY } from "./types"

export const usrWantsDictionary = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: USER_WANTS_DICTIONARY })
  }
}
