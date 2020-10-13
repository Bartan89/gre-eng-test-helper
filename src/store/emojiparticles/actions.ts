import { Dispatch } from "redux"
import { getJSDocTemplateTag } from "typescript"
import { GetState } from "../types"
import { EMOJIS_LANDED, EMOJIS_START_FLIGHT } from "../uistate/types"
import { CLEAN_EMOJI_BUILD_UP, CLICK_SHOW_EMOJI } from "./types"

export const stageClick = (dispatch : Dispatch, getState : GetState) => {
  dispatch({ type: EMOJIS_START_FLIGHT })
  dispatch({ type: CLICK_SHOW_EMOJI })


  if (getState().uistate.emojiFlying === true) {
    setTimeout(() => {
      dispatch({ type: EMOJIS_LANDED })
    }, 3000);  
  }

  
}


export const cleanEmojiBuildUp = (dispatch : Dispatch) => {
  dispatch({ type: CLEAN_EMOJI_BUILD_UP })
}